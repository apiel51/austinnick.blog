import "../styles/index.css";

// pass strict
type Props = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
