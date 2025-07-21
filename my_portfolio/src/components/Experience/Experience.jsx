import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiInfosys } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import eyLogo from "../../assets/eyLogo.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Experience</h1>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Tech Stack Icons */}
        <div className="w-full lg:w-2/5 flex flex-wrap justify-center gap-5">
          {[
            <FaHtml5 color="#E34F26" />,
            <FaCss3 color="#1572B6" />,
            <FaReact color="#61DAFB" />,
            <FaJs color="#F7DF1E" />,
            <FaFigma color="#F24E1E" />,
            <SiMongodb color="#47A248" />,
            <FaNodeJs color="#3C873A" />,
            <SiExpress color="white" />,
            <DiMysql color="#00758F" />,
            <FaGithub color="white" />
          ].map((Icon, i) => (
            <span
              key={i}
              className="w-16 h-16 md:w-20 md:h-20 p-3 bg-zinc-950 flex items-center justify-center rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              {React.cloneElement(Icon, { size: 40 })}
            </span>
          ))}
        </div>

        {/* Internship Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <SiInfosys color="#4285F4" size={50} />
            <div>
              <h2 className="text-lg font-semibold leading-tight">Internship Trainee, Infosys SpringBoard Pragati</h2>
              <p className="text-sm text-gray-300">April 2025 - Present</p>
              <ul className="text-sm list-disc list-inside mt-2 text-gray-300">
                <li>Worked as an internship trainee through Infosys Springboard.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <img
              src={eyLogo}
              className="w-14 h-14 object-contain"
              alt="EY Logo"
            />
            <div>
              <h2 className="text-lg font-semibold leading-tight">
                Internship Trainee, EY GDS NextGen Internship
              </h2>
              <p className="text-sm text-gray-300">March 2025 - April 2025</p>
              <ul className="text-sm list-disc list-inside mt-2 text-gray-300">
                <li>Participated in a virtual internship with AICTE and EY GDS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
