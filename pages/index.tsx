import Header from "./Header";
import Links from "./Links";
import About from "./About";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-4 flex flex-col items-center">
      <Header />
      <Links />
      <About />
    </div>
  );
}
