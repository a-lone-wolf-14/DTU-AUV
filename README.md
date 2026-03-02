<<<<<<< HEAD
# DTU AUV — Official Website

> Autonomous Underwater Vehicle team at Delhi Technological University

## Live Preview

Open `index.html` in any browser — no build step required.

## Project Structure

```
├── index.html              # Home page
├── about.html              # About page (Three.js globe)
├── team.html               # Team page (member overlay)
├── work.html               # Work page (3D carousel)
│
├── css/
│   ├── styles.css          # Global styles, navbar, footer
│   ├── about.css           # About page styles
│   ├── team.css            # Team overlay styles
│   └── work.css            # Work page / carousel styles
│
├── js/
│   ├── script.js           # Global JS (navbar, scroll, animations)
│   ├── about.js            # Three.js globe & interactions
│   ├── team.js             # Team member overlay logic
│   └── work.js             # 3D carousel logic
│
└── assets/
    └── images/
        ├── auv-underwater.png
        ├── bots/            # AUV bot renders
        │   ├── arkaja-2.0.png
        │   ├── lapras-2.0.png
        │   ├── new-bot.png
        │   └── varuna-3.0.png
        └── team/            # Team member photos
            ├── 1.jpg
            ├── 4.jpg
            ├── ...
            └── 16.jpeg
```

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no frameworks, zero build step
- **Three.js** `0.160.0` — 3D globe on about page (loaded via importmap / CDN)
- **GSAP** `3.12.5` — animations
- **Google Fonts** — Inter + Playfair Display
- **Font Awesome** `6.5.0` — icons

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, stats, services, projects overview |
| **About** | Interactive Three.js photo globe, timeline, subsystems |
| **Team** | Member grid → click to open detailed overlay |
| **Work** | 3D perspective carousel of AUV bots with detail panels |

## License

© DTU AUV. All rights reserved.
=======
# DTU-AUV
>>>>>>> 3d8b86d646fc3c16158d935fc91c838b96eed68e
