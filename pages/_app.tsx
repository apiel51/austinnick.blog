import Head from "next/head";
import "../styles/index.css";

// pass strict
type Props = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
