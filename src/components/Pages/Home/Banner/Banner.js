import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../../../files/tanni.pdf";
import { Link } from "react-router-dom";
import ParticleBackground from "../../../ParticleBackground";
import me from "../../../../images/me.png";
import "./Banner.css";

const Banner = () => {
  // const particlesInit = (main) => {
  //     console.log(main);
  //     // await loadFull(main);
  // };

  // const particlesLoaded = (container) => {
  //     console.log(container);
  // };
  return (
    <div className="text-white">
      <ParticleBackground />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center my-20 px-10 md:px-20">
        <div>
          <h2 className="font-sans text-5xl text-red-400">Hello,</h2>
          <h2 className="font-sans text-9xl text-accent">I'm Tanni</h2>
          <h2 className="font-sans text-4xl text-red-400">Web Developer</h2>
          <Link to={cv} target="_blank" download>
            <button className="btn btn-white btn-outline my-10 rounded-full shadow-2xl">
              Download Resume{" "}
              <span className="text-xl ml-3 font-bold">
                <AiOutlineDownload />
              </span>
            </button>
          </Link>
        </div>
        <div className="w-96 herobg">
          <img className="w-[96%]" src={me} alt="" />
          {/* <img className='w-full' src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2022/02/h1_hero-bg.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
