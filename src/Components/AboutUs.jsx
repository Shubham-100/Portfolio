import React from 'react';

const AboutUs = ({ABOUT_ME}) => {
    return (
        <div ref={ABOUT_ME} className='flex flex-col justify-around flex-nowrap md:flex-row'  id='#about-me'>
            <div className='flex flex-col p-4 mt-[5rem]'>
                <h2 className='text-[#bc1a45] text-[1.5rem] font-bold'>ABOUT ME</h2>
                <h3 className='text-[#fffff] text-[2.5rem] font-semibold'>Who is Shubham?</h3>
                <img src="https://raw.githubusercontent.com/AVS1508/AVS1508/master/assets/Night-Coding.gif" className='w-120 h-120  mt-6'/>
            </div>
            <div className='flex flex-col ml-6 mt-20 w-100 p-4 md: w-full'>
                <h3 className='text-[#bc1a45] text-[1.55rem] ml-6 font-semibold'>
                A curiosity-driven developer with design chops.
                </h3>
                <div>
                <p className='text-white text-[1.3rem] p-6'>Dynamic and skilled software developer with expertise in C++, Python, Java, React, Bootstrap, and the Qt framework. Passionate about open source contributions and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
                </div>
                <form action='https://drive.google.com/file/d/15TLi3-uss6GC1rAUBF5apNz0kvNS3jZ4/view?usp=drive_link' target='_blank'>
                    <p className='text-white text-[1.2rem] ml-6' >Link to <button className='text-[#bc1a45] hover:text-[#bc4d1a]'  style={{textDecoration: "underline", paddingTop: "2rem"}}>Resume</button></p>
                </form>
                <div className='flex flex-row flex-wrap mt-2 '>
                        <a href="https://github.com/Shubham-100" target="_blank" className='hover:border-black hover:border-2'><img src={require('../assets/github.png')} className='w-10 h-10 rounded-full' /></a>

                    
                <a href="https://leetcode.com/aryan10jangid/" target="_blank" className='hover:border-black hover:border-2'><img src={require('../assets/lc.png')} className='w-10 h-10 rounded-full' /></a>
                    <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank" className='hover:border-black hover:border-2'><img src={require('../assets/linkedin.png')} className='w-10 h-10 rounded-full' /></a>
                    <a href="https://twitter.com/AryanJangid20" target="_blank" className='hover:border-black hover:border-2'><img src={require('../assets/tw.png')} className='w-10 h-10 rounded-full' /></a>
                    <a href="mailto:aryan10jangid@gmail.com" className='hover:border-black hover:border-2'> <img src={require('../assets/gmail.png')} className='w-10 h-10 rounded-full' /></a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;