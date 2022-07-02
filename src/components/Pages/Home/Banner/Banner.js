import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import cv from "../../../../files/tanni.pdf"
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size

    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 items-center my-20 px-10 md:px-20'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div>
                <h2 className='font-sans text-5xl text-primary'>Hello,</h2>
                <h2 className='font-sans text-9xl text-secondary'>I'm Tanni</h2>
                <h2 className='font-sans text-4xl text-primary'>Web Developer</h2>
                <Link to={cv} target="_blank" download>
                    <button className='btn btn-secondary btn-outline my-10 rounded-full shadow-xl'>Download Resume <span className='text-xl ml-3 font-bold'><AiOutlineDownload /></span></button></Link>
            </div>
            <div className='w-96'>
                <img className='w-full' src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2022/02/h1_hero-bg.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;