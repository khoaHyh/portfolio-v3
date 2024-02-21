import SocialLinks from "@/components/SocialLinks";
import Tabs, { TabContent } from "@/components/Tabs";
import Tags from "@/components/Tags";
import Image from "next/image";
import React, { ReactNode } from "react";

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
  linkAlt: string;
  imageAlt: string;
  tags: string[];
};

export default function Home() {
  // TODO: look into these later, just scaffolding.
  const outerContainer =
    "mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0";
  const subContainer = "lg:flex lg:justify-between lg:gap-4";
  const headerContainer =
    "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:py-24";
  const contentContainer = "pt-24 lg:w-1/2 lg:py-24";

  const experiences: Experience[] = [
    {
      company: "Touchbistro",
      positions: [
        {
          title: "Full Stack Software Developer I",
          tenure: "May 2021 — July 2022",
          customNode: (
            <>
              Full Stack Software Developer{" "}
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
              Full Stack Software Developer{" "}
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

  const projects: Project[] = [
    {
      title: "Twitter clone API",
      description:
        "Developed an API that mocks some of the features that Twitter provides. API Features include: authentication, direct messages, tweets, retweets, likes, and threads. Utilized Mocha/Chai for automated tests and Insomnia (Postman-alternative) for manual testing.",
      linkAlt: "Github page for Twitter clone API (opens in a new tab)",
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
  ];

  const tabContent: TabContent = {
    About: (
      <div className="font-sans">
        <p className="mb-4">{`In late 2019, inspired as a pedicab driver, I aimed to start my own business and realized a website was crucial. Diving into self-education through Udemy, my journey took a turn when the pandemic hit, leading me to discover a passion for coding. After a year and a half of immersing myself in online resources like blogs, YouTube, Coursera, and FreeCodeCamp, I joined TouchBistro. Today, I contribute to TouchBistro's Remote Menu Management solution, focusing on expanding to Multi-Venue customers.`}</p>
        <p className="mb-4">{`Outside of work, I'm into Brazilian jiu-jitsu, street dance, my Steam library, and hacking on whatever piques my interest.`}</p>
      </div>
    ),
    Experience: (
      <ul>
        {experiences.map(({ company, positions, description, tags }) => (
          <li key={company}>
            <div className="z-10 sm:col-span-6">
              <h3 className="mb-2">
                <div className="font-extrabold text-lg text-primaryText">
                  {company}
                </div>
                {positions.map(({ title, tenure, customNode }, index) => (
                  <div
                    key={title}
                    className={`font-sans ${
                      index === positions.length - 1
                        ? "text-primary"
                        : "text-secondary"
                    } text-xs font-semibold uppercase tracking-wide`}
                  >
                    {customNode ?? title}
                    {`${tenure ? ` · ${tenure}` : ""}`}
                  </div>
                ))}
              </h3>
              <p className="font-sans text-sm">{description}</p>
              <Tags tags={tags} />
            </div>
          </li>
        ))}
      </ul>
    ),
    Projects: (
      <ul className="group/list">
        {projects.map(({ title, description, linkAlt, imageAlt, tags }) => (
          <li key={title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightBackground lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="font-medium text-base text-primaryText inline-flex items-baseline leading-tight hover:text-primary focus-visible:text-primary group/link"
                    rel="noreferrer noopener"
                    href="https://github.com/khoaHyh/twitter-clone-api"
                    aria-label={linkAlt}
                    target="_blank"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{title}</span>
                  </a>
                </h3>
                <p className="font-sans text-sm mt-2 leading-normal">
                  {description}
                </p>
                <Tags tags={tags} />
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt={imageAlt}
                src="https://raw.githubusercontent.com/khoaHyh/twitter-clone-api/master/assets/twitter-clone-api_ss.png"
                loading="lazy"
                width={200}
                height={48}
                decoding="async"
              />
            </div>
          </li>
        ))}
      </ul>
    ),
    "Learning Resources": <>resources</>,
  };

  return (
    <>
      <div className={outerContainer}>
        <div className={subContainer}>
          <header className={headerContainer}>
            <>
              <h1 className="text-4xl tracking-tight sm:text-5xl font-extrabold">
                Khoa Huynh
              </h1>
              <h2 className="mt-3 text-lg text-primary font-sans font-medium tracking-tight sm:text-xl">
                Full Stack Software Developer at TouchBistro
              </h2>
              <p className="font-sans mt-4 max-w-xs leading-normal text-bodyLightSlateGray">
                Working with great people to build great products 🛠️
              </p>
            </>
            <SocialLinks />
          </header>
          <div id="content" className={contentContainer}>
            <Tabs tabs={tabContent} />
          </div>
        </div>
      </div>
    </>
  );
}
