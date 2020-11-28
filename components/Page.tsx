import { FunctionComponent } from "react";
import Header from "./Header";
import Links from "./Links";

const Page: FunctionComponent = ({ children }) => {
  return (
    <div className="container mx-auto px-4 pt-4 flex flex-col items-center">
      <Header />
      <Links />
      <main className="max-w-lg w-full pt-4">{children}</main>
    </div>
  );
};

export default Page;
