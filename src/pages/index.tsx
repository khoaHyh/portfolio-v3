import SocialLinks from "@/components/SocialLinks";
import React from "react";

const pageStyle = "bg-background text-primaryText font-mono w-full h-screen";
// TODO: look into these later, just scaffolding.
const mainContainer =
  "mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4";
const headerContainer =
  "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24";

export default function Home() {
  return (
    <div className={pageStyle}>
      <div className={mainContainer}>
        <header className={headerContainer}>
          <>
            <h1 className="text-4xl tracking-tight sm:text-5xl font-bold">
              Khoa Huynh
            </h1>
          </>
          <SocialLinks />
        </header>
      </div>
    </div>
  );
}
