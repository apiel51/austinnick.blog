import Link from "next/link";
import LinkedInIcon from "../public/linkedin-logo.svg";
import GithubIcon from "../public/github-logo.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <img
        className="sm:w-20 sm:h-20 flex rounded-full w-16 h-16"
        alt="picture of Austin"
        src="https://public-bucket-austin-things.s3-us-west-2.amazonaws.com/austin_headshot.jpg"
      />
      <Link href="/">
        <div className="py-1 text-2xl cursor-pointer">Austin Piel</div>
      </Link>
      <div className="flex-1 flex">
        <a
          className="mr-2"
          aria-label="LinkedIn icon button"
          href="https://www.linkedin.com/in/austinpiel/"
        >
          <img
            className="w-4 h-4 cursor-pointer"
            alt="linkedin icon"
            src={LinkedInIcon}
          />
        </a>
        <a aria-label="Github icon button" href="https://github.com/apiel51">
          <img
            className="w-4 h-4 rounded-sm cursor-pointer"
            alt="github icon"
            src={GithubIcon}
          />
        </a>
      </div>
    </header>
  );
}
