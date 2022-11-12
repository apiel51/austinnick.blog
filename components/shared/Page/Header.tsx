import Link from 'next/link';
import Image from 'next/image';

import LinkedInIcon from 'public/linkedin-logo.svg';
import GithubIcon from 'public/github-logo.svg';
import headshot from '../../../public/headshot.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <div className="sm:w-28 sm:h-28 flex w-16 h-16 relative">
        <Image alt="Austin" src={headshot} className="rounded-full" />
      </div>
      <Link passHref href="/">
        <div className="py-1 text-2xl cursor-pointer">Austin Nick Piel</div>
      </Link>
      <div className="flex-1 flex">
        <a
          className="mr-2 w-4 h-4 cursor-pointer"
          aria-label="LinkedIn icon button"
          href="https://www.linkedin.com/in/austinpiel/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-sm"
            alt="linkedin icon"
            src={LinkedInIcon}
          />
        </a>
        <a
          className="w-4 h-4 cursor-pointer"
          aria-label="Github icon button"
          href="https://github.com/apiel51"
          target="_blank"
          rel="noreferrer"
        >
          <Image className="rounded-full" alt="github icon" src={GithubIcon} />
        </a>
      </div>
    </header>
  );
}
