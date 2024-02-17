import SocialLinks from "@/components/SocialLinks";
import Tabs, { TabContent } from "@/components/Tabs";
import React from "react";

const pageStyle = "bg-background text-primaryText font-mono w-full h-screen";
// TODO: look into these later, just scaffolding.
const outerContainer =
  "mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0";
const subContainer = "lg:flex lg:justify-between lg:gap-4";
const headerContainer =
  "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:py-24";
const contentContainer = "pt-24 lg:w-1/2 lg:py-24";

export default function Home() {
  const tabContent: TabContent = {
    About: (
      <>
        <p className="mb-4">{`In late 2019, inspired as a pedicab driver, I aimed to start my own business and realized a website was crucial. Diving into self-education through Udemy, my journey took a turn when the pandemic hit, leading me to discover a passion for coding. After a year and a half of immersing myself in online resources like blogs, YouTube, Coursera, and FreeCodeCamp, I joined TouchBistro. Today, I contribute to our Remote Menu Management solution, focusing on expanding to Multi-Venue customers.`}</p>
        <p className="mb-4">{`Outside of work, I'm interested in Brazilian jiu-jitsu, street dance, my Steam library, and rotting away on Tik Tok 😭.`}</p>
      </>
    ),
    Experience: <>experience stuff</>,
    Projects: <>projects stuff</>,
  };

  return (
    <div className={pageStyle}>
      <div className={outerContainer}>
        <div className={subContainer}>
          <header className={headerContainer}>
            <>
              <h1 className="text-4xl tracking-tight sm:text-5xl font-extrabold">
                Khoa Huynh
              </h1>
              <h2 className="mt-3 text-lg text-primary font-medium tracking-tight sm:text-xl">
                Full Stack Software Developer at TouchBistro
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-bodyLightSlateGray">
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
    </div>
  );
}
