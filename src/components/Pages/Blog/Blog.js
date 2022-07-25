import React from 'react';
import comingsoon from '../../../images/comminsoon.png'

const Blog = () => {
    return (
        <div id='blog' className='my-20 bg-red-300'>
            <h2 className='text-5xl font-serif text-primary text-center font-bold'>My <span className='text-secondary'>Blog</span></h2>
            <img className='w-1/3 mx-auto' src={comingsoon} alt="" />
        </div>
    );
};

export default Blog;