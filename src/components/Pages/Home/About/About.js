import React from 'react';

const About = () => {
    return (
        <div id='about' className='my-20'>

            <div class="hero">
                <div class="hero-content flex-col lg:flex-row px-10 md:px-20 gap-20">
                    <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2022/02/h1_hero-bg.png" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-serif text-primary font-bold">About <span className='text-secondary'>Me</span></h1>

                        <p class="py-6 text-lg font-serif text-gray-500">I am Tanni Rani Dey. I completed diploma in engineering in computer technology from Sylhet
                            polytechnic institute. I did an internship at Binary IT institute in my diploma 8th semester. I want to
                            be a full-stack developer and my goal is to create unique anything in this field.
                        </p>
                        <button class="btn btn-primary btn-outline border border-2 rounded-full">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;