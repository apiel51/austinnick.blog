import Link from "next/link";
import LinkedInIcon from "../public/linkedin-logo.svg";
import GithubIcon from "../public/github-logo.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <img
        className="w-20 h-20 flex rounded-full"
        alt="picture of Austin"
        src="https://scontent.fabe1-1.fna.fbcdn.net/v/t1.0-9/121004016_5250572514968820_976679705646868873_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=8a2-Nu_OCkoAX9ePhCF&_nc_ht=scontent.fabe1-1.fna&oh=4d61f543ee7990c3a49871b58e065c2d&oe=5FE78E9B"
      />
      <Link href="/">
        <div className="py-1 text-2xl cursor-pointer">Austin Piel</div>
      </Link>
      <div className="flex-1 flex">
        <a href="https://www.linkedin.com/in/austinpiel/">
          <img className="w-4 h-4 mr-2 cursor-pointer" src={LinkedInIcon} />
        </a>
        <a href="https://github.com/apiel51">
          <img className="w-4 h-4 rounded-sm cursor-pointer" src={GithubIcon} />
        </a>
      </div>
    </header>
  );
}
