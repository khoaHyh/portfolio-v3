import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import pomodomoPic from "../assets/pomodomo.png";
import chakraChatPic from "../assets/chakra_chat.png";

type Experience = {
  company: string;
  positions: {
    title: string;
    tenure?: string;
    customNode?: ReactNode;
  }[];
  description: string;
  tags: string[];
};

type Project = {
  title: string;
  description: string;
  githubLink: string;
  githubLinkAlt: string;
  image: string | StaticImageData;
  imageAlt: string;
  tags: string[];
  appLink?: string;
  appLinkAlt?: string;
};

export const experiences: Experience[] = [
  {
    company: "TouchBistro",
    positions: [
      {
        title: "Full Stack Software Developer I",
        tenure: "May 2021 — July 2022",
        customNode: (
          <>
            <span>Full Stack Software Developer </span>
            {/* Render the I character without the top and bottom horizontal lines */}
            <span className="font-[sans-serif] font-medium">I</span>
          </>
        ),
      },
      {
        title: "Full Stack Software Developer II",
        tenure: "July 2022 — present",
        customNode: (
          <>
            <span>Full Stack Software Developer </span>
            {/* Render the II characters without the top and bottom horizontal lines */}
            <span className="font-[sans-serif] font-medium">II</span>
          </>
        ),
      },
    ],
    description:
      "Working on a dynamic team, we are building TouchBistro's latest innovation: RMM3 (Remote Menu Management 3.0). This cloud-first solution revolutionizes how menus are integrated with the POS system, offering seamless cloud synchronization. From the initial stages of development to launching the beta version, our team has meticulously built, styled, and deployed various features. We're currently migrating existing customers to this advanced system, with a special emphasis on accommodating multi-venue clients.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React",
      "Next.js",
      "Docker",
      "CircleCI",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Twitter clone API",
    description:
      "Developed an API that mocks some of the features that Twitter provides. API Features include: authentication, direct messages, tweets, retweets, likes, and threads.",
    githubLink: "https://github.com/khoaHyh/twitter-clone-api",
    githubLinkAlt: "Github page for Twitter clone API (opens in a new tab)",
    image:
      "https://raw.githubusercontent.com/khoaHyh/twitter-clone-api/master/assets/twitter-clone-api_ss.png",
    imageAlt:
      "Screnshot of Insomnia and terminal setup for testing Twitter clone API",
    tags: [
      "JavaScript",
      "MongoDB",
      "Express",
      "Node.js",
      "Mocha",
      "Chai",
      "Passport.js",
    ],
  },
  {
    title: "Pomodomo",
    description: "A pomodoro web app that helps users work in intervals.",
    githubLink: "https://github.com/khoaHyh/pomodomo",
    githubLinkAlt: "Github page for Pomodomo (opens in a new tab)",
    appLink: "https://pomodomo-qok9fj4pu-khoahyh.vercel.app/",
    appLinkAlt: "Pomodomo app page (opens in a new tab)",
    image: pomodomoPic,
    imageAlt: "Screenshot of Pomodomo web app",
    tags: [
      "JavaScript",
      "PostgreSQL",
      "Express.js",
      "Node.js",
      "Next.js",
      "Digital Ocean",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "Chakra Chat",
    description:
      "A web app that enables registered users to chat in real-time with other users. Features a PwnedPasswords API check on user registration which checks if the password inputted was found in a database breach.",
    githubLink: "https://github.com/khoaHyh/chakra-chat",
    githubLinkAlt: "Github page for Chakra Chat (opens in a new tab)",
    image: chakraChatPic,
    imageAlt: "Screenshot of Chakra Chat web app",
    tags: [
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "React",
      "Passport.js",
      "Chakra UI",
    ],
  },
];
