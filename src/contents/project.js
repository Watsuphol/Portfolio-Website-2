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

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import accout from "../asset/ac.gif";
import colmar from "../asset/CR.gif";
import PP from "../asset/PP.gif";
import react from "../asset/React.gif";
import shopping from "../asset/shop.gif";

export const data = [
  {
    date: "Jul 2024",
    title: "Puey Puey E-Commerce (Web application)",
    link: "https://eotd-front-end-ps1z.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/orgs/JSD7-EOTD/repositories",
      },
    ],
    descriptions: [
      "· Market Research and Application Development: Researched the pet humanization trend in Thailand and developed a web application based on user personas derived from data provided by Mahidol University's Marketing Faculty.",
      "· UX/UI Design and Implementation: Designed a user-friendly UX/UI by leveraging detailed persona research, ensuring an intuitive user experience and consistent design elements to simplify processes and highlight key information.",
      "· Full-Stack Development: Utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) to build web applications, focusing on front-end UX/UI optimization and seamless back-end integration for efficient data management, payment processing, and dashboard functionalities",
      "· Project Management and Team Collaboration: Managed team projects using Trello and Stack, fostering a cooperative work environment with regular meetings, clear communication, and well-defined tasks to ensure smooth project progress.",
    ],
    skills: [["React.js", "Node.js", "MongoDB", "JavaScript", "Tailwindcss"]],
    picture: PP,
  },
  {
    date: "Jul 2024",
    title: "Booking Hotels (Web application)",
    link: "",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/Watsuphol/Booking-Apps",
      },
    ],
    descriptions: [
      "· Implemented robust CRUD (Create, Read, Update, Delete) functionality for booking data, leveraging Express.js and Node.js to establish a seamless connection with a MongoDB database.",
      "· Designed and developed a user-centric interface with React.js and CSS, ensuring a smooth, intuitive user experience.",
    ],
    skills: [["React.js", "Node.js", "MongoDB", "JavaScript", "Tailwindcss"]],
    picture: "",
  },
  {
    date: "May 2024",
    title: "Account Calculator (Mini Project)",
    link: "https://mini-project-account-cal.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/Watsuphol/MINI-PROJECT-ACCOUNT-CAL",
      },
    ],
    descriptions: [
      "· Developed a web application for managing personal finances, allowing users to track expenses, and incomes, and calculate account balances.",
    ],
    skills: [["React"]],
    picture: accout,
  },
  {
    date: "May 2024",
    title: "Admin Dashboard (Mini Project)",
    link: "https://39-mc-react.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/Watsuphol/39-Mc-react",
      },
    ],
    descriptions: [
      "· Connect API by RESTful method, utilizing AXIOS library to CREATE (POST), READ (GET), DELETE (DELETE) data from API Doc.",
      "· Add validation for create form in admin panel.",
      "· Design and implement UPDATE (PUT) form in admin panel, connect API is useful.",
    ],
    skills: [["React"]],
    picture: react,
  },
  {
    date: "Apr 2024",
    title: "Shopping Cart (Mini Project)",
    link: "https://39-mc-js.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/Watsuphol/39-MC-JS",
      },
    ],
    descriptions: [
      "· The project features functionalities like adding items to the cart, updating quantities, and checking out.",
    ],
    skills: [["HTML", "CSS", "JavaScript"]],
    picture: shopping,
  },
  {
    date: "Apr 2024",
    title: "Colmar (Mini Project)",
    link: "https://colmar-39-watsuphol-mc.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/Watsuphol/MINI-PROJECT-COLMAR39",
      },
    ],
    descriptions: [
      "· Created responsive layouts using media queries and flexible grids, emphasizing the importance of adaptability to ensure optimal user experiences across various devices.",
    ],
    skills: [["HTML", "CSS"]],
    picture: colmar,
  },
];
