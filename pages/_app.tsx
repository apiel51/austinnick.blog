import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import 'styles/tailwind.css';

// pass strict
type Props = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Austin&#39;s Blog</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Austin's website" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
