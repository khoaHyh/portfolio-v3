import SocialLinks, { GithubLink } from "@/components/SocialLinks";
import Tabs, { TabContent } from "@/components/Tabs";
import Tags from "@/components/Tags";
import {
  AboutSection,
  experiences,
  openSourceContributions,
  projects,
} from "@/constants/content";
import Image from "next/image";
import React from "react";

export default function Home() {
  const outerContainer =
    "mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0";
  const subContainer = "lg:flex lg:justify-between lg:gap-4";
  const headerContainer =
    "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24";
  const contentContainer = "pt-20 lg:w-1/2 lg:py-24";
  const projectGithubIcon =
    "text-primaryText hover:text-secondary focus-visible:text-secondary relative mt-2 inline-flex items-center text-sm font-medium";
  const footerLink =
    "font-medium text-primaryText hover:text-primary focus-visible:text-primary";

  const tabContent: TabContent = {
    About: <AboutSection />,
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
      <div>
        <ul className="group/list">
          {projects.map(
            ({
              title,
              description,
              githubLink,
              githubLinkAlt,
              image,
              imageAlt,
              tags,
              appLink,
              appLinkAlt,
            }) => (
              <li key={title} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightBackground lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="font-medium text-base text-primaryText inline-flex items-baseline leading-tight hover:text-primary focus-visible:text-primary group/link"
                        rel="noreferrer noopener"
                        target="_blank"
                        href={appLink ?? githubLink}
                        aria-label={appLinkAlt ?? githubLinkAlt}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{title}</span>
                      </a>
                    </h3>
                    <p className="font-sans text-sm mt-2 leading-normal">
                      {description}
                    </p>
                    {appLink != null && (
                      <GithubLink
                        iconStyle={projectGithubIcon}
                        href={githubLink}
                        ariaLabel={githubLinkAlt}
                      />
                    )}
                    <Tags tags={tags} />
                  </div>
                  <Image
                    priority
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    alt={imageAlt}
                    src={image}
                    width={200}
                    height={48}
                    decoding="async"
                  />
                </div>
              </li>
            ),
          )}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight text-primaryText font-semibold group"
            aria-label="View More Projects on Github"
            href="https://github.com/khoaHyh?tab=repositories"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-pinkSoft motion-reduce:transition-none">
                View More Projects on{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-pinkSoft motion-reduce:transition-none">
                  Github
                </span>
                <svg
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden={true}
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    ),
    "Open Source": (
      <div>
        <p className="font-sans mb-8">{`Here are some open source projects that I've been contributing to:`}</p>
        <ul className="group/list">
          {openSourceContributions.map(
            ({
              title,
              description,
              pullRequestLink,
              pullRequestLinkAlt,
              image,
              imageAlt,
              tags,
            }) => (
              <li key={title} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightBackground lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="font-medium text-base text-primaryText inline-flex items-baseline leading-tight hover:text-primary focus-visible:text-primary group/link"
                        rel="noreferrer noopener"
                        target="_blank"
                        href={pullRequestLink}
                        aria-label={pullRequestLinkAlt}
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
                    priority
                    className="transition sm:order-1 sm:col-span-2 sm:translate-y-1"
                    alt={imageAlt}
                    src={image}
                    width={200}
                    height={48}
                    decoding="async"
                  />
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    ),
    // TODO: fill in resources from journey
    // "Learning Resources": <>resources</>,
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
              <h2 className="mt-2 text-lg text-primary font-sans font-medium tracking-tight sm:text-xl">
                Full Stack Software Developer at TouchBistro
              </h2>
              <p className="font-sans mt-2 max-w-xs leading-normal text-bodyLightSlateGray">
                Working with great people to build great products 🛠️
              </p>
            </>
            <SocialLinks />
            <footer className="max-w-md text-secondary text-xs sm:pb-0 pt-4">
              <p>Built with 🫶</p>
            </footer>
          </header>
          <main id="content" className={contentContainer}>
            <Tabs tabs={tabContent} />
          </main>
        </div>
      </div>
    </>
  );
}
