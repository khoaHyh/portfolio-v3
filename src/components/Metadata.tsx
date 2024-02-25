import Head from "next/head";

const description =
  "Khoa Huynh is a full stack software developer with experience in building scalable web applications.";

export default function Metadata(): JSX.Element {
  return (
    <Head>
      <title>Khoa Huynh</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Other meta tags for SEO */}
      <meta property="og:title" content="Khoa Huynh" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        // TODO: get screenshot of site and use URL here
        content=""
      />
      <meta property="og:type" content="/portfolio_screenshot.png" />
    </Head>
  );
}
