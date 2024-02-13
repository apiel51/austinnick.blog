import Image from 'next/image';

import GithubIcon from 'public/github-logo.svg';
import LinkedInIcon from 'public/linkedin-logo.svg';
import XIcon from 'public/x-logo.svg';
import propic from '../../../public/wide-eyed.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <div className="sm:w-24 sm:h-24 flex w-16 h-16 relative">
        <Image alt="Austin" src={propic} className="rounded-full" />
      </div>
      <div className="py-1 text-2xl">Austin Nick Piel</div>
      <div className="flex-1 flex">
        <a
          className="mr-2 w-4 h-4"
          aria-label="X icon button"
          href="https://twitter.com/austinnickpiel/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-sm cursor-pointer"
            alt="linkedin icon"
            src={XIcon}
          />
        </a>
        <a
          className="mr-2 w-4 h-4 cursor-pointer"
          aria-label="LinkedIn icon button"
          href="https://www.linkedin.com/in/austinpiel/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-sm cursor-pointer"
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
          <Image
            className="rounded-full cursor-pointer"
            alt="github icon"
            src={GithubIcon}
          />
        </a>
      </div>
    </header>
  );
}
