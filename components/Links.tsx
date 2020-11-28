import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

type LinkProps = {
  path: string;
};

const BoldText: FunctionComponent = ({ children }) => {
  return (
    <div className="flex-1 font-bold text-xs sm:text-base">{children}</div>
  );
};

const Link: FunctionComponent<LinkProps> = ({ children, path }) => {
  return (
    <NextLink href={path}>
      <div className="flex-1 underline cursor-pointer text-xs sm:text-base">
        {children}
      </div>
    </NextLink>
  );
};

const pathMap = {
  About: "/",
  Writing: "/writing",
  Bookshelf: "/bookshelf",
  Thoughts: "/thoughts",
  Music: "/music",
};

export default function MobileLinks() {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className="flex text-center w-full max-w-lg pt-4 pb-2 border-b">
      {Object.entries(pathMap).map((mapping) =>
        pathname === mapping[1] ? (
          <BoldText>{mapping[0]}</BoldText>
        ) : (
          <Link path={mapping[1]}>{mapping[0]}</Link>
        )
      )}
    </nav>
  );
}
