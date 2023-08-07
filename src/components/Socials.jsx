import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";

function Socials() {
  return (
    <ul className="mt-4 flex gap-8 sm:gap-12 lg:gap-16">
      <li>
        <a
          href="https://github.com/BKSchatzki"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GitHub className="h-4 w-4 opacity-50 hover:opacity-100 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bkschatzki/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Linkedin className="h-4 w-4 opacity-50 hover:opacity-100 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/BKSchatzki"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Twitter className="h-4 w-4 opacity-50 hover:opacity-100 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
