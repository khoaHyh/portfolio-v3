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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <div className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
