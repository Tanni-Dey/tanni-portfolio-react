import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particles.config';

const ParticleBackground = () => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles params={particlesConfig}></Particles>
    );
};

export default ParticleBackground;