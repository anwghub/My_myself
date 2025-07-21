import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Certificates = () => {
  return (
    <div
      id="Certificates"
      className="bg-black bg-opacity-30 text-white px-6 py-16 md:py-24 mx-0 md:mx-20 mt-10 rounded-lg shadow-xl mb-36"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-left md:text-center">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Certificate 1 */}
        <div className="flex items-start gap-3">
          <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              TATA (Gen AI Powered Data Analysis Job Simulation)
            </h3>
            <p className="text-sm md:text-md text-gray-300 pt-2">
              {/* Issued by Coursera, Jun 2023 */}
              <br />
              <a
                href="https://drive.google.com/file/d/1bZbKP3P9ESg0rWoBwNtq3wmt-mQHSqst/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7da0fa] underline hover:text-white"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="flex items-start gap-3">
          <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              AICTE -Internship on Empower AI (Microsoft & SAP)
            </h3>
            <p className="text-sm md:text-md text-gray-300 pt-2">
              {/* Issued by MongoDB University, Feb 2024 */}
              <br />
              <a
                href="https://drive.google.com/file/d/1FO37w2Qo3ABTs2OBmZdxDh_wUcLSLgvP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7da0fa] underline hover:text-white"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="flex items-start gap-3">
          <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              EY-GDS next Gen Internship Certificate of Appreciation (AICTE)
            </h3>
            <p className="text-sm md:text-md text-gray-300 pt-2">
              {/* Issued by Udemy, Jan 2024 */}
              <br />
              <a
                href="https://drive.google.com/file/d/1AraoSTXaXAM5wZY71zGRaOmy9_dvFt77/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7da0fa] underline hover:text-white"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className="flex items-start gap-3">
          <IoArrowForward size={24} className="text-[#7da0fa] min-w-[24px] mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              IEMHACKS 2.0 Participation Certificate
            </h3>
            <p className="text-sm md:text-md text-gray-300 pt-2">
              {/* Issued by Udemy, Dec 2023 */}
              <br />
              <a
                href="https://drive.google.com/file/d/1qYYIflXQecIxC0D5FuNKYp2dIJix-Y69/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7da0fa] underline hover:text-white"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
