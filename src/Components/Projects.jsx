import React from 'react';
import Projectdetails from './Projectdetails';

const Projects = ({title,d1,d2,d3,tech,site,github,img}) => {
    return (
        <div className='p-2 md:p-5 flex flex-col justify-between mb-[3em] md:flex-row w-[40rem] md:w-full'>
            <div>
            <Projectdetails title={title} d1={d1} d2={d2} d3={d3} img={tech} site={site} github={github}/>
            </div>
            <div className='flex flex-row jutify-end items-center'>
            <img src={img} className='w-[18.5em] h-[12rem] mt-[2rem] md:mt-0 md:w-[30rem] md:h-[20rem]' alt='cover'/>
            </div>
        </div>
    );
}

export default Projects;