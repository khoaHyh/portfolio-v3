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
      <meta property="og:type" content="portfolio" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/khoaHyh/portfolio-v3/main/public/portfolio_screenshot.png"
      />
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/khoaHyh/portfolio-v3/main/public/portfolio_screenshot.png"
      />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
}
