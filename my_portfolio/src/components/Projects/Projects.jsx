import React from "react";
import ProjectCard from "./ProjectCard";
import spotifyImg from "../../assets/spotify_logo.jpg"
import wealthfolioImg from '../../assets/wealth.webp'
import spypyImg from "../../assets/spypy.webp"
import shopyImg from "../../assets/shopify.jpg"

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap justify-around gap-5">
                <ProjectCard
                    title="Spotify Clone"
                    main="Built a functional music streaming platform with an admin panel for managing albums and songs.Focused on delivering a seamless user experience"
                    sourceLink="https://github.com/anwghub/mySpotify_clone"
                    imgSrc={spotifyImg}
                />
                <ProjectCard
                    title="WealthFolio"
                    main="Developing an AI-powered expense tracker app to manage budgets, track expenses, and optimize financial planning."
                    sourceLink="https://github.com/anwghub/WealthFolio"
                    imgSrc={wealthfolioImg}
                />
                <ProjectCard
                    title="SpyPy"
                    main="Developed a basic spy camera system that records video when motion is detected.Implemented functionality to automatically stop recording when the person exits the camera’s field of view."
                    sourceLink="https://github.com/anwghub/SpyPy"
                     imgSrc={spypyImg}
                />
                <ProjectCard
                    title="Shopify-Sales-Analysis"
                    main="Performed sales analysis for Shopify using Power BI on a customized Shopify sales dataset."
                    sourceLink="https://github.com/anwghub/Shopify-Sales-Analysis-using-power-bi"
                    imgSrc={shopyImg}
                />
            </div>
        </div>
    );
};

export default Projects;