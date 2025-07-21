import React from "react";

const ProjectCard = ({ title, main, sourceLink, imgSrc }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl min-h-[400px] justify-between transform hover:scale-105 transition duration-300 cursor-pointer">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={imgSrc}
        alt={title}
      />
      <div className="flex flex-col flex-grow px-4">
        <h3 className="text-xl md:text-2xl font-bold leading-normal mt-4">{title}</h3>
        <p className="text-sm md:text-md leading-tight py-2 flex-grow">{main}</p>
      </div>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center block"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
