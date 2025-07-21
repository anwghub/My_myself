import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="bg-black bg-opacity-30 text-white px-6 py-16 md:py-24 mx-0 md:mx-20 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-left md:text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={AboutImg}
            alt="About"
            className="h-80 object-contain animate-float hover:animate-bounce"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Education */}
          <div className="flex items-start gap-3">
            <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Final Year B.Tech Undergrad (Computer Science & Engineering)
              </h3>
              <p className="text-sm md:text-md text-gray-300 pt-2">
                Govt. College of Engineering & Ceramic Technology, Kolkata <br />
                <strong>CGPA:</strong> 9.59
              </p>
            </div>
          </div>

          {/* School */}
          <div className="flex items-start gap-3">
            <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">10th & 12th Standard</h3>
              <p className="text-sm md:text-md text-gray-300 pt-2">
                Shyamnagar Balika Vidyalaya <br />
                <strong>10th:</strong> 92.3% | <strong>12th:</strong> 90.6%
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex items-start gap-3">
            <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                MERN Stack & Backend Developer
              </h3>
              <p className="text-sm md:text-md text-gray-300 pt-2">
                I develop backend and full-stack applications using MongoDB, Express, React, and Node.js with a focus on scalable and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
