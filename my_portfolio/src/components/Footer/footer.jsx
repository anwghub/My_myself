import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white px-10 py-32 items-center gap-10"
    >
      <div className="text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-3">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:anwesa2021@gmail.com"
            className="underline hover:text-gray-200 transition"
          >
            anwesa2021@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/anwesa-ghosh-09a356255/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200 transition"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/anwghub"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200 transition"
          >
            github.com/anwghub
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Footer;
