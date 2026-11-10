export const profile = {
  name: "Ashraf Mia",
  title: "Aspiring Full-Stack Web Developer",
  roles: [
    "Aspiring Full-Stack Web Developer",
    "React & Next.js Developer",
    "Node.js & MongoDB Learner",
  ],
  intro:
    "I build modern, responsive and user-friendly web applications with React, Next.js, Node.js and MongoDB.",
  email: "ashrafali27483@gmail.com",
  phone: "01709165682",
  phoneIntl: "+8801709165682",
  whatsapp: "8801709165682",
  github: "https://github.com/Ashraf-Mia",
  linkedin: "https://www.linkedin.com/in/ashraf-mia-795b09443/",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am an aspiring Full-Stack Web Developer with a passion for building modern, responsive and user-friendly web applications. My journey started with HTML, CSS and JavaScript, and step by step I moved on to TypeScript, React and Next.js, and then to the backend with Node.js, Express.js and MongoDB.",
    "Alongside my teaching profession at Jamia Arabia Nuria Madrasa, I keep improving my programming skills through hands-on projects and practical problem-solving. Teaching has taught me patience, clear communication and the habit of breaking big problems into small steps, all of which I bring into my code.",
    "I enjoy working on full-stack products where I can shape both the interface and the logic behind it: clean UIs, secure authentication, REST APIs and well-structured databases. My goal is to become a skilled Full-Stack Developer and build useful, scalable applications that solve real-world problems.",
  ],
  hobbies: [
    "Teaching & Mentoring",
    "Reading Islamic & Educational Books",
    "Exploring New Technologies",
    "Web Development",
    "Problem Solving",
    "Learning New Skills",
  ],
  facts: [
    { value: "4+", label: "Full-stack projects" },
    { value: "20+", label: "Technologies & tools" },
    { value: "100%", label: "Passion for learning" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 78 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Responsive Web Design", level: 88 },
      { name: "shadcn/ui", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST API", level: 75 },
      { name: "Better Auth (Learning)", level: 45 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "WordPress", level: 65 },
      { name: "npm", level: 80 },
    ],
  },
];

export const learning = [
  "Advanced JavaScript",
  "Next.js App Router",
  "Authentication & Authorization",
  "Full-Stack Web Development",
  "Database Management",
];

export const education = [
  {
    title: "Takmil (Dawra-e-Hadith)",
    place: "Jamia Arabia Nuria Mogorkhal Madrasa",
    url: "https://jamianuria.com/",
    period: "2022 - 23",
    points: ["Completed Takmil (Dawra-e-Hadith) in Islamic Studies."],
  },
  {
    title: "Ifta (Specialization in Islamic Jurisprudence)",
    place: "Markazul Fikri Wad Dawah",
    url: "https://www.markazulfikri.shop/",
    period: "2023 - 24",
    points: ["Completed specialization in Islamic Jurisprudence (Ifta)."],
  },
];
export const experience = [
  {
    title: "Teacher",
    place: "Jamia Arabia Nuria Madrasa",
    period: "Present",
    points: [
      "Teaching and mentoring students as a full-time educator.",
      "Building communication, patience and problem-solving skills that carry over into software development.",
    ],
  },
  {
    title: "Self-Directed Full-Stack Development",
    place: "Personal & Practice Projects",
    period: "Ongoing",
    points: [
      "Built full-stack projects with Next.js, TypeScript, Express.js and MongoDB.",
      "Implemented authentication with Better Auth and deployed applications on Vercel.",
    ],
  },
];

export const projects = [
  {
    slug: "help-events",
    title: "HELP EVENTS – Charity Event Platform",
    short:
      "A charity event platform for organizing humanitarian activities like winter clothing and blanket distribution.",
    image: "/projects/help-events.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    description:
      "HELP EVENTS is a charity event management platform designed to organize humanitarian activities such as winter clothing and blanket distribution. Users can explore events and participate in community initiatives, with authentication keeping participation secure.",
    live: "https://helpeventsfrontend.vercel.app/",
    github: "https://github.com/Ashraf-Mia/help-events",
    challenges: [
      "Connecting Better Auth between a Next.js frontend and a separate Express backend.",
      "Designing the MongoDB structure for events and participants.",
      "Handling CORS and environment variables across two separate deployments.",
      "Keeping the interface clean and responsive on every screen size.",
    ],
    future: [
      "Admin dashboard for creating and managing events.",
      "Online donation and volunteer registration.",
      "Email and notification reminders for upcoming events.",
      "Search and filtering by category, date and location.",
    ],
  },
  {
    slug: "wanderlust",
    title: "Wanderlust – Travel Booking Platform",
    short:
      "A full-stack travel booking app to explore destinations, manage bookings and use travel services.",
    image: "/projects/wanderlust.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    description:
      "Wanderlust is a full-stack travel booking application that allows users to explore travel destinations, manage their bookings and interact with travel-related services through a clean, responsive interface.",
    live: "https://wanderlust-frontand.vercel.app/",
    github: "https://github.com/Ashraf-Mia/wanderlust",
    challenges: [
      "Modeling destinations, users and bookings in MongoDB.",
      "Protecting booking routes and user data with authentication.",
      "Keeping frontend state in sync with the backend API.",
      "Making image-heavy pages fast and responsive.",
    ],
    future: [
      "Secure online payment gateway integration.",
      "Reviews, ratings and a wishlist feature.",
      "Interactive maps and trip planning tools.",
      "Admin panel to manage destinations and bookings.",
    ],
  },
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    short:
      "A Bangla news platform to explore and read articles through a clean, responsive interface.",
    image: "/projects/bangla-news-24.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    description:
      "Bangla News 24 is a Bangla news platform where users can explore and read news articles through a clean and responsive interface, built to be fast and easy to read on any device.",
    live: "https://bangla-news-24-phi-beige.vercel.app/",
    github: "https://github.com/Ashraf-Mia/bangla-news-24",
    challenges: [
      "Keeping Bangla typography readable and consistent across devices.",
      "Organizing articles by category while keeping pages fast.",
      "Managing authentication and protected routes.",
      "Designing a layout that stays clean with long-form content.",
    ],
    future: [
      "Search and category filters.",
      "Bookmarks, comments and reactions for readers.",
      "Admin panel for publishing and editing articles.",
      "Dark reading mode and font size controls.",
    ],
  },
];
