/*
 *   date - string
 *   title - string
 *   link - URL string
 *   materials - [{
 *       type - icon
 *       link - URL string
 *   }]
 *   descriptions - [string]
 *   skills - [
 *       [string] - 1 array/line
 *   ]
 *   picture - file path
 */

// import { faBook } from "@fortawesome/free-solid-svg-icons";
import Genkx from "../asset/GENkx.png";
import Westride from "../asset/westride.gif";

export const data = [
  {
    date: "2024",
    title: "Junior Software Developer Cohort 7 [ Bootcamp ]",
    link: "https://kxinnovation.com/genkx-2/",
    materials: [
      // { type: faBook, link: "https://medium.com/@KDeelert/how-i-built-soccer-analyzer-tool-eng-55bf8a473248" },
    ],
    descriptions: [
      "· Acquired skills in React for front-end, Node.js for back-end, and MongoDB for database management",
      "· Responsibilities in project management positions included the utilization of Agile and Scrum methodologies to oversee projects from inception through deployment.",
      "· Served as the UX/UI lead in a team, overseeing the design and development processes for creating Web application.",
    ],
    skills: [
      [
        "HTML",
        "CSS",
        "Tailwindcss",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "SQL",
        "AI",
        "Prompt engineering",
      ],
      [
        "Growth mindset",
        "Teamwork",
        "Proactiveness",
        "Critical thinking",
        "Time management",
        "Problem solving",
      ],
    ],
    picture: Genkx,
  },
  {
    date: "2023-2024",
    title:
      "Self-learning, Programming language (WeStride Institute of Technology)",
    link: "https://www.we-stride.com/",
    materials: [],
    descriptions: [
      "· Developed expertise in HTML, CSS, and JavaScript, applying these skills to create responsive websites project.",
      "· Enhanced algorithm skills through consistent practice with exercises while studying comprehensive documentation.",
    ],
    skills: [
      [
        "HTML",
        "CSS",
        "Tailwindcss",
        "JavaScript",
        "React.js",
        "Git",
        "Algorithm",
        "AI",
        "Prompt engineering",
      ],
      ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "Lightroom"],
    ],
    picture: Westride,
  },
];
