import { StaticImageData } from "next/image";
import { ReactNode } from "react";

const pomodomoPic = "/pomodomo.png";
const chakraChatPic = "/chakra_chat.png";
const fastHtmlPic = "/fasthtml.svg";
const sonicsightPic = "/sonicsight.png";
const launchDarklyPic = "/launchdarkly.png";

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

type OpenSourceContribution = {
  title: string;
  description: string;
  pullRequestLink: string;
  pullRequestLinkAlt: string;
  image: string | StaticImageData;
  imageAlt: string;
  tags: string[];
};

export function AboutSection(): JSX.Element {
  return (
    <div className="font-sans">
      <p className="mb-4">{`In late 2019, inspired as a pedicab driver, I aimed to start my own business and realized a website was crucial. Diving into self-education through Udemy, my journey took a turn when the pandemic hit, leading me to discover a passion for coding. After a year and a half of immersing myself in online resources like blogs, YouTube, Coursera, and FreeCodeCamp, I joined TouchBistro. Today, I'm apart of TouchBistro's Developer Acceleration team, focusing on enabling developers to deploy frequently and safely.`}</p>
      <p className="mb-4">{`Outside of work, I'm into Brazilian jiu-jitsu, street dance, my Steam library, and hacking on whatever piques my interest.`}</p>
    </div>
  );
}

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
      "Currently working on the Developer Acceleration team which is dedicated to tooling, automation and developer enablement. I get to be responsible for things like CI/CD, dev tools & environment, best practices, and more. Previously, I was on the Menu & Staff Management team where I got to take part in shipping new features for our web app that is integrated with a POS and migrating customers from our legacy product to our new cloud-first one.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React",
      "Next.js",
      "Docker",
      "CircleCI",
      "Go",
      "AWS",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SonicSight",
    description:
      "A web application that transforms audio files into spectrograms and uses deep learning to classify sounds. Currently specialized in distinguishing between cat and dog sounds, it leverages a model I trained on Kaggle, deployed on Hugging Face with a FastHTML frontend.",
    githubLink: "https://github.com/khoaHyh/sonicsight",
    githubLinkAlt: "Github page for SonicSight (opens in a new tab)",
    appLink: "https://sonicsight.dev/",
    appLinkAlt: "Sonicsight app page (opens in a new tab)",
    image: sonicsightPic,
    imageAlt:
      "Screenshot of SonicSight web application showing spectrogram visualization of an audio file with classification results",
    tags: [
      "Python",
      "FastHTML",
      "fast.ai",
      "Audio Processing",
      "Spectrograms",
      "Gradio",
      "Deep Learning",
      "Hugging Face",
      "Kaggle",
    ],
  },
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

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "Mocha",
    description:
      "☕️ simple, flexible, fun javascript test framework for node.js & the browser",
    pullRequestLink:
      "https://github.com/mochajs/mocha/pulls?q=is%3Apr+author%3AkhoaHyh+",
    pullRequestLinkAlt:
      "Pull Requests by khoaHyh in the Mocha repository (opens in a new tab)",
    image:
      "https://raw.githubusercontent.com/mochajs/mocha/master/assets/mocha-logo.svg",
    imageAlt: "Mocha logo",
    tags: ["JavaScript", "Testing", "CLI"],
  },
  {
    title: "FastHTML",
    description:
      "A new next-generation Python web framework for fast, scalable web applications with minimal, compact code",
    pullRequestLink:
      "https://github.com/AnswerDotAI/fasthtml/pulls?q=is%3Apr+author%3AkhoaHyh+",
    pullRequestLinkAlt:
      "Pull Requests by khoaHyh in the FastHTML repository (opens in a new tab)",
    image: fastHtmlPic,
    imageAlt: "AnswerDotAI/FastHTML logo",
    tags: ["Python", "Jupyter Notebook", "Web Framework", "Documentation"],
  },
  {
    title: "LaunchDarkly/ld-find-code-refs",
    description: "Command line program for generating flag code references",
    pullRequestLink:
      "https://github.com/launchdarkly/ld-find-code-refs/pulls?q=is%3Apr+is%3Aclosed+author%3AkhoaHyh",
    pullRequestLinkAlt:
      "Pull Requests by khoaHyh in the LaunchDarkly/ld-find-code-refs repository (opens in a new tab)",
    image: launchDarklyPic,
    imageAlt: "LaunchDarkly logo",
    tags: ["Go", "Feature Flags", "CLI"],
  },
];
