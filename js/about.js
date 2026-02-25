import * as THREE from 'three';

/* ============================================================
   THREE.JS SPHERICAL GLOBE — About Page  |  Polished
   ============================================================ */

const container = document.getElementById('globe-container');
if (!container) {
    console.warn('Globe container not found — skipping Three.js init');
}

if (container) {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // UI refs
    const introText  = document.getElementById('globe-intro');
    const sidePanel  = document.getElementById('globe-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelDesc  = document.getElementById('panel-desc');
    const exitBtn    = document.getElementById('globe-exit-btn');

    // ---------- Card data ----------
    const cardData = [
        {
            src: 'assets/images/team/1.jpg',
            title: 'Team Spirit',
            desc: 'The heart of DTU AUV — a multidisciplinary team united by a shared passion for marine robotics and innovation.'
        },
        {
            src: 'assets/images/team/4.jpg',
            title: 'Workshop Sessions',
            desc: 'Hands-on fabrication and assembly sessions where ideas come to life — from CAD models to physical prototypes.'
        },
        {
            src: 'assets/images/team/5a.jpg',
            title: 'Pool Testing',
            desc: 'Rigorous in-water testing to validate thruster control, buoyancy tuning, and autonomous navigation systems.'
        },
        {
            src: 'assets/images/team/5.jpeg',
            title: 'Competition Prep',
            desc: 'Final integration checks and strategy sessions before heading to international AUV competitions worldwide.'
        },
        {
            src: 'assets/images/team/7.jpeg',
            title: 'Electronics Lab',
            desc: 'Custom PCB design, sensor calibration, and power distribution — the nervous system of every AUV we build.'
        },
        {
            src: 'assets/images/team/8.jpeg',
            title: 'Field Deployment',
            desc: 'Deploying our vehicles in real-world conditions — testing perception, control, and autonomy under pressure.'
        },
        {
            src: 'assets/images/team/9.jpeg',
            title: 'Design Reviews',
            desc: 'Collaborative design reviews where every subsystem is scrutinized for performance, reliability, and integration.'
        },
        {
            src: 'assets/images/team/10.jpeg',
            title: 'RoboSub Competition',
            desc: 'Competing against 50+ teams at RoboSub in San Diego — the world\'s premier AUV challenge organized by RoboNation.'
        },
        {
            src: 'assets/images/team/12.jpeg',
            title: 'Mentorship',
            desc: 'Senior members mentoring juniors — knowledge transfer is the backbone of our team\'s continuity and growth.'
        },
        {
            src: 'assets/images/team/13.jpg',
            title: 'Award Ceremony',
            desc: 'Recognition for excellence — celebrating milestones and achievements at national and international platforms.'
        },
        {
            src: 'assets/images/team/14.png',
            title: 'Software Stack',
            desc: 'ROS2-based autonomy, YOLO object detection, and real-time path planning — the brain behind our submarines.'
        },
        {
            src: 'assets/images/team/15.png',
            title: 'CAD & Simulation',
            desc: 'SolidWorks modeling and ANSYS simulations ensuring hydrodynamic efficiency and structural integrity.'
        },
        {
            src: 'assets/images/team/16.jpeg',
            title: 'Team Bonding',
            desc: 'Beyond engineering — the friendships and memories that make DTU AUV more than just a technical team.'
        }
    ];

    const nodes = [];
    const sphereRadius = 9;
    const textureLoader = new THREE.TextureLoader();

    // ---------- Ambient particles ----------
    function createParticles() {
        const count = 200;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({
            color: 0xff6348,
            size: 0.06,
            transparent: true,
            opacity: 0.35,
            sizeAttenuation: true
        });
        scene.add(new THREE.Points(geo, mat));
    }
    createParticles();

    // ---------- Build the globe ----------
    function buildGlobe() {
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xff6348,
            transparent: true,
            opacity: 0.1
        });

        const cardHeight = 3.6;
        let loaded = 0;

        cardData.forEach((data, i) => {
            const texture = textureLoader.load(data.src, (tex) => {
                const imgW = tex.image.width;
                const imgH = tex.image.height;
                const aspect = imgW / imgH;

                const targetAspect = 0.75;
                let uScale = 1, vScale = 1, uOffset = 0, vOffset = 0;

                if (aspect > targetAspect) {
                    uScale = targetAspect / aspect;
                    uOffset = (1 - uScale) / 2;
                } else {
                    vScale = aspect / targetAspect;
                    vOffset = (1 - vScale) / 2;
                }

                tex.repeat.set(uScale, vScale);
                tex.offset.set(uOffset, vOffset);

                const cardWidth = cardHeight * targetAspect;
                const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);

                // Sharp (full-res) material
                const sharpMaterial = new THREE.MeshBasicMaterial({
                    map: tex,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.35,
                    color: 0x777777
                });

                // Blurred canvas texture — simulates depth-of-field for far cards
                const blurCanvas = document.createElement('canvas');
                const blurSize = 256;
                const blurRatio = blurSize / Math.max(imgW, imgH);
                blurCanvas.width  = Math.round(imgW * blurRatio);
                blurCanvas.height = Math.round(imgH * blurRatio);
                const blurCtx = blurCanvas.getContext('2d');
                blurCtx.filter = 'blur(5px)';
                blurCtx.drawImage(tex.image, 0, 0, blurCanvas.width, blurCanvas.height);
                const blurTex = new THREE.CanvasTexture(blurCanvas);
                blurTex.repeat.set(uScale, vScale);
                blurTex.offset.set(uOffset, vOffset);
                blurTex.needsUpdate = true;

                const blurMaterial = new THREE.MeshBasicMaterial({
                    map: blurTex,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.35,
                    color: 0x777777
                });

                const mesh = new THREE.Mesh(geometry, sharpMaterial);

                const phi   = Math.acos(-1 + (2 * i) / cardData.length);
                const theta = Math.sqrt(cardData.length * Math.PI) * phi;

                mesh.position.setFromSphericalCoords(sphereRadius, phi, theta);
                mesh.lookAt(0, 0, 0);

                mesh.userData = {
                    id: i,
                    spherical: new THREE.Spherical(sphereRadius, phi, theta),
                    title: data.title,
                    desc: data.desc,
                    sharpMaterial,
                    blurMaterial,
                    isHovered: false
                };

                group.add(mesh);
                nodes.push(mesh);

                loaded++;
                if (loaded === cardData.length) {
                    nodes.sort((a, b) => a.userData.id - b.userData.id);
                    for (let j = 1; j < nodes.length; j++) {
                        const lineGeo = new THREE.BufferGeometry().setFromPoints([
                            nodes[j].position.clone(),
                            nodes[j - 1].position.clone()
                        ]);
                        group.add(new THREE.Line(lineGeo, lineMaterial));
                    }
                    if (nodes.length > 2) {
                        const lineGeo = new THREE.BufferGeometry().setFromPoints([
                            nodes[nodes.length - 1].position.clone(),
                            nodes[0].position.clone()
                        ]);
                        group.add(new THREE.Line(lineGeo, lineMaterial));
                    }
                }
            });
        });
    }

    buildGlobe();

    group.rotation.x = 0.15;
    group.rotation.z = 0.05;

    // ---------- Focus / exit state ----------
    let activeNode  = null;
    let hoveredNode = null;

    function exitFocus() {
        if (!activeNode) return;
        activeNode = null;

        sidePanel.classList.add('hidden');
        exitBtn.classList.remove('visible');

        introText.style.opacity = '1';
        introText.style.pointerEvents = 'auto';

        // Re-enable auto-rotation — depth loop takes over material/scale reset
    }

    exitBtn && exitBtn.addEventListener('click', exitFocus);

    // ---------- Click → Focus ----------
    window.addEventListener('click', (event) => {
        const heroSection = document.getElementById('about-hero');
        if (!heroSection) return;
        const rect = heroSection.getBoundingClientRect();
        if (event.clientY > rect.bottom || event.clientY < rect.top) return;

        mouse.x =  (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(nodes);

        if (hits.length > 0) {
            focusOnNode(hits[0].object);
        }
    });

    function focusOnNode(mesh) {
        if (activeNode === mesh) return;
        activeNode = mesh;

        introText.style.opacity = '0';
        introText.style.pointerEvents = 'none';
        sidePanel.classList.add('hidden');

        // Reset exit button
        exitBtn && exitBtn.classList.remove('visible');

        const targetY = -mesh.userData.spherical.theta;
        const targetX =  Math.PI / 2 - mesh.userData.spherical.phi;

        gsap.to(group.rotation, {
            y: targetY,
            x: targetX,
            duration: 1.8,
            ease: 'power3.inOut',
            onComplete: () => {
                panelTitle.innerText = mesh.userData.title;
                panelDesc.innerText  = mesh.userData.desc;
                sidePanel.classList.remove('hidden');
                exitBtn && exitBtn.classList.add('visible');
            }
        });

        nodes.forEach(n => {
            // Reset to sharp material so GSAP targets correct map
            n.material = n.userData.sharpMaterial || n.material;
            if (n === mesh) {
                gsap.to(n.material, { opacity: 1, duration: 0.6 });
                gsap.to(n.material.color, { r: 1, g: 1, b: 1, duration: 0.6 });
                gsap.to(n.scale, { x: 1.14, y: 1.14, z: 1.14, duration: 0.6, ease: 'power2.out' });
            } else {
                gsap.to(n.material, { opacity: 0.12, duration: 0.6 });
                gsap.to(n.material.color, { r: 0.28, g: 0.28, b: 0.28, duration: 0.6 });
                gsap.to(n.scale, { x: 0.78, y: 0.78, z: 0.78, duration: 0.6, ease: 'power2.out' });
            }
        });
    }

    // ---------- Mouse parallax + hover raycasting ----------
    let mouseXSmooth = 0, mouseYSmooth = 0;

    window.addEventListener('mousemove', (e) => {
        mouseXSmooth = ((e.clientX / window.innerWidth) - 0.5) * 0.3;
        mouseYSmooth = ((e.clientY / window.innerHeight) - 0.5) * 0.3;

        if (activeNode) {
            renderer.domElement.style.cursor = 'default';
            return;
        }

        const heroSection = document.getElementById('about-hero');
        if (!heroSection) return;
        const rect = heroSection.getBoundingClientRect();
        if (e.clientY > rect.bottom || e.clientY < rect.top) return;

        mouse.x =  (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(nodes);
        const newHover = hits.length > 0 ? hits[0].object : null;

        if (newHover !== hoveredNode) {
            if (hoveredNode) hoveredNode.userData.isHovered = false;
            hoveredNode = newHover;
            if (hoveredNode) hoveredNode.userData.isHovered = true;
        }

        renderer.domElement.style.cursor = hoveredNode ? 'pointer' : 'default';
    });

    // ---------- Depth render loop ----------
    const _worldPos = new THREE.Vector3();

    function updateDepth() {
        if (activeNode) return;

        nodes.forEach(node => {
            node.getWorldPosition(_worldPos);

            // depthScore: 0 = fully behind globe, 1 = fully facing camera
            const depthScore = Math.max(0, Math.min(1,
                (_worldPos.z + sphereRadius) / (sphereRadius * 2)
            ));

            let targetOpacity, targetBright, targetScale;

            if (node.userData.isHovered) {
                // Hover state — pop to front
                targetOpacity = 1.0;
                targetBright  = 1.0;
                targetScale   = 1.15;
            } else {
                // Depth-based: front cards are sharp/bright/large, back cards are blurred/dark/small
                targetOpacity = 0.12 + depthScore * 0.73;   // 0.12 → 0.85
                targetBright  = 0.28 + depthScore * 0.72;   // 0.28 → 1.0
                targetScale   = 0.70 + depthScore * 0.34;   // 0.70 → 1.04
            }

            // Smooth lerp toward targets
            const lerpSpeed = 0.07;
            node.material.opacity += (targetOpacity - node.material.opacity) * lerpSpeed;
            const curB = node.material.color.r;
            node.material.color.setScalar(curB + (targetBright - curB) * lerpSpeed);
            const curS = node.scale.x;
            node.scale.setScalar(curS + (targetScale - curS) * lerpSpeed);

            // Swap sharp ↔ blurred material based on depth (blur when far/behind)
            const shouldBlur = depthScore < 0.52 && !node.userData.isHovered;
            const targetMat  = shouldBlur
                ? node.userData.blurMaterial
                : node.userData.sharpMaterial;

            if (targetMat && node.material !== targetMat) {
                const savedOpacity = node.material.opacity;
                const savedBright  = node.material.color.r;
                node.material = targetMat;
                node.material.opacity = savedOpacity;
                node.material.color.setScalar(savedBright);
            }
        });
    }

    // ---------- Render loop ----------
    function animate() {
        requestAnimationFrame(animate);

        if (!activeNode) {
            group.rotation.y += 0.0012;
            camera.position.x += (mouseXSmooth - camera.position.x) * 0.02;
            camera.position.y += (-mouseYSmooth - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);
        }

        updateDepth();
        renderer.render(scene, camera);
    }

    animate();

    // ---------- Resize ----------
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

