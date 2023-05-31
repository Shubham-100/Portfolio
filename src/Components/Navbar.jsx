import React from 'react';

const Navbar = ({HOME,PROJECTS,ACHIEVEMENTS,ABOUT_ME,scrollToSection,SKILLS}) => {
    return (
        <div  style={{boxShadow: "10px 6px black"}}>
            <div className='h-20 items-center fixed -z-100 flex flex-row'>
                <h1>Shubham</h1>
            </div>
            <div className='p-10 w-full bg-primary h-20  items-center fixed z-100 opacity-100 flex flex-row-reverse'>
                <ul className='text-black hover:text-[#bc1a45]  text-[1rem]'><a onClick={() => {scrollToSection(ABOUT_ME)}}>ABOUT ME</a></ul>
                <ul className='text-black hover:text-[#bc1a45]  text-[1rem]'><a  onClick={() => {scrollToSection(SKILLS)}}>SKILLS</a></ul>
                <ul className='text-black hover:text-[#bc1a45]  text-[1rem]'><a  onClick={() => {scrollToSection(PROJECTS)}}>PROJECTS</a></ul>
                <ul className='text-black hover:text-[#bc1a45]  text-[1rem]'><a onClick={() => {scrollToSection(ACHIEVEMENTS)}}>ACHIEVEMENTS</a></ul>
            </div>
        </div>
    );
}

export default Navbar;
