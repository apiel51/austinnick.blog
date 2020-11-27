import Header from "./header";
import About from "./about";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-4 flex flex-col items-center">
      <Header />
      <About />
    </div>
  );
}
