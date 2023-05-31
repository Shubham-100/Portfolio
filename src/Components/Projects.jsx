import React from 'react';
import Projectdetails from './Projectdetails';

const Projects = ({title,d1,d2,d3,tech,site,github,img}) => {
    return (
        <div className='text-[white] flex flex-col items-center justify-between mb-[6em] md:flex-row'>
            <div>
            <Projectdetails title={title} d1={d1} d2={d2} d3={d3} img={tech} site={site} github={github}/>
            </div>
            <img src={img} className='w-[30rem] h-[20rem]' alt='cover'/>
        </div>
    );
}

export default Projects;
