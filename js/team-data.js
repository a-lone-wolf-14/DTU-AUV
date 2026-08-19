/* ============================================================
   TEAM MEMBER DATA
   ============================================================
   To ADD a new team member: copy one object below, paste it,
   and fill in the fields. That's it — no HTML editing needed.
   The grid on team.html will automatically create a new card
   and will automatically make room for it (more rows appear
   on their own, the layout does not need to be touched).

   To REMOVE a member: delete their object from the array.

   FIELD GUIDE — required (card + popup won't work without these):
   - id        : unique lowercase-with-dashes id, e.g. "zack-hill"
   - name      : full name shown on the card and popup
   - role      : title/role shown on the card and popup
   - email     : email shown + used for the mailto link
   - image     : path to their photo, e.g. "assets/images/team/<id>.jpg"
                 If the file is missing or not added yet, a grey
                 placeholder silhouette shows automatically instead
                 of a broken image icon — no code change needed.

   FIELD GUIDE — optional (used by the click-to-open popup only;
   safe to omit, sensible defaults are used if you leave them out):
   - subsystem     : short group label, e.g. "Mechanical", "Software"
   - bio           : 1-2 sentence description shown in the popup
   - skills        : array of strings, e.g. ["Python", "ROS2"]
   - expertise     : number 0-100
   - contributions : number shown on the popup's "Contributions" card
   - yearsActive   : number of years on the team
   - social        : { linkedin: "url", github: "url", twitter: "url" }
   - bars          : array of { label, pct } shown as bar chart
   ============================================================ */

const TEAM_MEMBERS = [
  {
    id: "marvin-rao",
    name: "Marvin Rao",
    role: "Team Captain | Team Lead",
    email: "zack@few.io",
    image: "assets/images/Team Members/Mechanical/Marvin.png"
  },
  {
    id: "od-madhav-prakash",
    name: "OD Madhav Prakash",
    role: "Vice Captain | Vice Team Lead",
    email: "arlton@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Madhav.jpeg"
  },
  {
    id: "vighnesh-r-pai",
    name: "Vighnesh R Pai",
    role: "Team Manager",
    email: "sarah@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Vighnesh.jpg"
  },
  {
    id: "vyom-bhat",
    name: "Vyom Bhat",
    role: "Mechanical Lead",
    email: "will@few.io",
    image: "assets/images/Team Members/Mechanical/Vyom.jpg"
  },
  {
    id: "lakshya-kashyap",
    name: "Lakshya Kashayp",
    role: "Mechanical Co-Lead",
    email: "brent@few.io",
    image: "assets/images/Team Members/Mechanical/Lakshya.png"
  },
  {
    id: "smit-bachan",
    name: "Smit Bachan",
    role: "Embedded Lead",
    email: "spero@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Smit.png"
  },
  {
    id: "ansh-wadhera",
    name: "Ansh Wadhera",
    role: "Embedded Lead",
    email: "calvin@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Ansh.jpg"
  },
  {
    id: "arshia-dhar",
    name: "Arshia Dhar",
    role: "Software Lead",
    email: "john@few.io",
    image: "assets/images/Team Members/Software/Arshia.jpg"
  },
  {
    id: "afroz-hadil",
    name: "Afroz Hadil",
    role: "Design & Media Lead",
    email: "email@few.io",
    image: "assets/images/Team Members/Design & Media/Afroz.jpg"
  },
  {
    id: "suraj-jaiswal",
    name: "Suraj Jaiswal",
    role: "Design & Media Lead",
    email: "email@few.io",
    image: "assets/images/Team Members/Design & Media/Suraj.jpg"
  },
  {
    id: "raghav-singh-gossain",
    name: "Raghav Singh Gossain",
    role: "Research & Development Lead",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Raghav.jpg"
  },
  {
    id: "suyash-raiswal",
    name: "Suyash Raiswal",
    role: "Research & Development Lead",
    email: "email@few.io",
    image: "assets/images/Team Members/Software/Suyash.jpg"
  },
  {
    id: "abhimanyu-gupta",
    name: "Abhimanyu Gupta",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Abhimanyu.jpg"
  },
  {
    id: "kritika-chaurasia",
    name: "Kritika Chaurasia",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Kritika.jpg"
  },
  {
    id: "himanshu",
    name: "Himanshu",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Himanshu.jpg"
  },
  {
    id: "mauli-hirawat",
    name: "Mauli Hirawat",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Mauli.jpg"
  },
  {
    id: "suryansh-kaushik",
    name: "Suryansh Kaushik",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Suryansh.jpg"
  },
  {
    id: "swaagat-singh",
    name: "Swaagat Singh",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Swaagat.jpg"
  },
  {
    id: "vansh-verma",
    name: "Vansh Verma",
    role: "Embedded Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Embedded & Acoustics/Vansh.jpeg"
  },
  {
    id: "arpan-gupta",
    name: "Arpan Gupta",
    role: "Mechanical Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Mechanical/Arpan.jpg"
  },
  {
    id: "kaustubh-arya",
    name: "Kaustubh Arya",
    role: "Mechanical Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Mechanical/Kaustubh.jpg"
  },
  {
    id: "harshit-kumar",
    name: "Harshit Kumar",
    role: "Mechanical Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Mechanical/Harshit.png"
  },
  {
    id: "nirnay-bagri",
    name: "Nirnay Bagri",
    role: "Mechanical Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Mechanical/Nirnay.jpg"
  },
  {
    id: "aditya-verma",
    name: "Aditya Verma",
    role: "Software Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Software/Aditya.jpg"
  },
  {
    id: "manvi-bansal",
    name: "Manvi Bansal",
    role: "Software Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Software/Manvi.jpg"
  },
  {
    id: "sugam-arora",
    name: "Sugam Arora",
    role: "Software Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Software/Sugam.jpg"
  },
  {
    id: "shrey-rai",
    name: "Shrey Rai",
    role: "Software Executive",
    email: "email@few.io",
    image: "assets/images/Team Members/Software/Shrey.webp"
  },
  /* ---- Add new members below this line ----

  {
    id: "new-member-id",
    name: "New Member Name",
    role: "Their Role",
    email: "email@few.io",
    image: "assets/images/team/new-member-id.jpg"
  },

  */
];
