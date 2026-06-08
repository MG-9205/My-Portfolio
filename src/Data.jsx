import WordLand from "./assets/images/WordLand.png"
import MHBlog from "./assets/images/MHBlog.png"
import MHEcommerce from "./assets/images/MHEcommerce.png"
import LocalExploere from "./assets/images/LocalExploere.png"
import MHFit from "./assets/images/MHFit.png"
import mine from "./assets/images/mine.png"
import Project from "./assets/images/Project.png"
const logotext = "MANISH GUPTA";
const meta = {
    title: "Manish Gupta",
    description: "I’m Manish Gupta data Full stack devloper,currently working in as a Freelancer",
};

const introdata = {
    title: "I’m Manish Gupta",
    animated: {
        first: "I build modern web application",
        second: "I ensure software quality through testing",
    },
    description: "A Software Developer and QA Engineer passionate about building scalable applications and delivering high-quality, reliable user experiences through development and testing",
    your_img_url: mine,
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "I'm a Software Developer and QA Engineer with experience in both application development and software testing. I build responsive and user-friendly web applications using React, Next.js, Tailwind CSS, Express.js, and Django, while also ensuring product quality through manual testing, automation testing, API testing, and defect management. My combined expertise in development and testing helps me create reliable, scalable, and high-performing software solutions. I'm passionate about continuous learning and enjoy contributing across the entire software development lifecycle",
};
const worktimeline = [
      {
        jobtitle: "Software Tester",
        where: "WebReinvent Technologies Pvt. Ltd",
        date: "July 2025 - Present",
    },
      {
        jobtitle: "Software Tester trainee",
        where: "Qspider",
        date: "Feb 2025 - June 2025",
    },
    {
        jobtitle: "Web developer",
        where: "GDG-IINTM",
        date: "Oct 2023 - Aug 2025",
    },
    {
        jobtitle: "Full Stack Developer",
        where: "untapped",
        date: "Aug 2024 - sep 2024",
    }

];

const skills = {
    Development: ["JavaScript", "React", "TailWind","Nextjs","HTML","CSS","Django","Express.js"],
    database: ["SQL", "MongoDB"],
    Testing: ["Manual Testing", "SDLC", "Java","API Testing","Webdriver IO", "Selenium", "Web and App Testing", "Automation Testing"]
  };
const Education = [{
        title: "Bachelor of Computer Applications (9.3 CGPA)",
        description: "From GGSIPU ",
        time:"Aug 2022 - July 2025"
    },{
        title: "12th-grade(82%)",
        description: "From CBSE ",
        time:"2019"
    },{
        title: "10th-grade(86%)",
        description: "From CBSE ",
        time:"2017"
    }
];

const dataportfolio = [{
        img:  WordLand ,
        description: "WordLand, an online book site where you can create your own virtual library and download PDF books. WordLand is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        link: "https://github.com/MG-9205/wordLand",
    },
    {
        img:  MHBlog ,
        description: "MH BLOG is a blogging website where users can create an account and share their thoughts on different topics with the world. The project is built using React, Tailwind CSS, and Firebase.",
        link: "https://github.com/MG-9205/MH_BLOGS",
    },
    {
        img:  LocalExploere ,
        description: "Local Explorer aims to provide a community-driven platform where users can share reviews, photos, and recommendations of places they have visited, helping others explore cities more meaningfully through local insights.",
        link: "https://github.com/MG-9205/Local_Explorer",
    },
    {
        img: MHEcommerce,
        description: " Developed a full-stack e-commerce website using TypeScript, React, Tailwind CSS, and Supabase. Implemented user authentication, product listings, and dynamic cart functionality. Focused on responsive design, smooth UI/UX, and efficient state management for seamless user interactions",
        link: "https://github.com/MG-9205/MH_Ecommerce",
    },
    {
        img:  Project ,
        description: " This website serves as a showcase of my skills, projects, and achievements. Feel free to explore and get to know more about me!",
        link: "https://github.com/MG-9205/My-Portfolio",
    },
    {
        img:  MHFit ,
        description: "Welcome to MH FITNESS, a modern gym website developed using React.js. This repository contains the source code for our website, providing information about our gym's services, facilities, membership options, and details about who we are.",
        link: "https://github.com/MG-9205/MH_FITTNESS",
    },
];

const contactConfig = {
    YOUR_EMAIL: "manishgupta9205@gmail.com",
    description: "A Software Developer and QA Engineer passionate about building scalable applications and delivering high-quality, reliable user experiences through development and testing",
    YOUR_SERVICE_ID:import.meta.env.VITE_SERVICE_ID,
    YOUR_TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
    YOUR_USER_ID:import.meta.env.VITE_USER_ID
};

const socialprofils = {
    github: "https://github.com/MG-9205",
    linkedin: "https://www.linkedin.com/in/manishgupta31",
    twitter: "https://twitter.com/Manish_Gupta31",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    Education,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};