import { AppProps } from "next/app";
import "../styles/globals.css";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Metadata from "@/components/Metadata";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibmPlexMono",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibmPlexSans",
});

const pageStyle =
  "bg-background text-primaryText font-mono w-full min-h-screen";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <div
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${pageStyle}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
