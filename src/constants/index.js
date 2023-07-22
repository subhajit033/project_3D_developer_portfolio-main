import {
  college,
  secondary_school,
  high_school,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  
  git,
  figma,
 
  threejs,
  ecommerce,
  melodyhub,
  SumZ,
  todo,
  youtubeClone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "SEO Analyst",
    icon: backend,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SumZ",
    description:
      " SumZ is an AI based Article Summarizer, which provides  concise summaries of articles , cherry on the cake is you can convert the summary to your local language ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: SumZ,
    source_code_link: "https://github.com/subhajit033/Ai-summarizer",
    live_link: "https://ai-article-suz.netlify.app/",
  },
  {
    name: "PlanIt",
    description:
      "Introducing a user-friendly todo application that allows seamless creation, reading, updating, and deletion of tasks for efficient task management.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "vanila js",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/subhajit033/PlanIt-a-todo-website",
    live_link: "https://subhajit033.github.io/PlanIt-a-todo-website/",
  },
  {
    name: "Cara",
    description:
      "Experience a dynamic ecommerce website enabling users to effortlessly add products to their cart and explore detailed product views for an enhanced shopping experience.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "vanila js",
          color: "green-text-gradient",
        },
      ],
    image: ecommerce,
    source_code_link: "https://github.com/subhajit033/Cara-Ecommerce-Website",
    live_link: "https://subhajit033.github.io/Cara-Ecommerce-Website/",
  },
  {
    name: "Youtube Clone",
    description:
      "Discover a YouTube-inspired website with seamless navigation and a powerful search functionality for an engaging and tailored video browsing experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: youtubeClone,
    source_code_link: "https://github.com/subhajit033/youtube-clone-2.0",
    live_link: "https://my-u-tube.netlify.app/",
  },
  {
    name: "MelodyHub",
    description:
      "Immerse yourself in the world of music with our interactive music website, allowing users to play, pause, and enjoy their favorite tunes with ease and convenience.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "vanila js",
          color: "green-text-gradient",
        },
      ],
    image: melodyhub,
    source_code_link: "https://github.com/subhajit033/MelodyHub",
    live_link: "https://subhajit033.github.io/MelodyHub/",
  },
];
const educations = [
  {
    type: "Secondary Education",
    date: "2014-2019",
    img: secondary_school,
    about: "Secured 91% in Secondary Examination, showcasing dedication, time management, and academic excellence. Actively engaged in diverse subjects, fostering critical thinking and problem-solving skills. Ready to apply knowledge in future endeavors."
  },
  {
    type: "Higher Secondary Education",
    img: high_school,
    date: "2019-2021",
    about: "Achieved 88% in Higher Secondary Examination, reflecting academic excellence, dedication, and strong performance. Developed critical thinking and problem-solving skills through diverse subjects. Excited to utilize gained knowledge for future pursuits."
  },
  {
    type: "B Tech in Computer Science and Engineering",
    img: college,
    date: "2022-present",
    about: "Currently pursuing B.Tech in Computer Science (Second Year), actively building a strong foundation in technology and programming. Engaging in coursework, projects, and practical applications to enhance problem-solving and analytical skills. Eager to contribute to the evolving field of computer science."
  }

]

export { services, technologies,  testimonials, projects, educations };
