import React from 'react';

const Achievements = ({ACHIEVEMENTS}) => {
    return (
        <div ref={ACHIEVEMENTS} className='p-2 md:p-05'>
            <h1 className='text-[#bc1a45] text-[2.1em] my-5 text-[#1c2273]'>Achievements</h1>
                <p className='text-white text-[1.2rem]'>
                I am an open source developer and enthusiast with a passion for creating impactful software solutions. I have participated in the Google Summer of Code program twice, where I collaborated with global teams to develop open source projects. With a track record of solving over 400 problems on LeetCode, I possess strong problem-solving and coding skills. I thrive in collaborative environments, where I can contribute my expertise to create innovative solutions. As an open source advocate, I am committed to making a positive impact on the developer community and leveraging technology to drive positive change.
                </p>

                <form action='https://github.com/Shubham-100/GSoC20' target='_blank'>
                    <p className='text-white text-[1.2rem] ml-4' >GSoC 2020 <button className='text-[#bc1a45] hover:text-[#bc4d1a]'  style={{textDecoration: "underline", paddingTop: "2rem"}}>Certificate</button></p>
                </form>
                <form action='https://github.com/Shubham-100/GSoC19' target='_blank'>
                    <p className='text-white text-[1.2rem] ml-4' >GSoC 2019 <button className='text-[#bc1a45] hover:text-[#bc4d1a]'  style={{textDecoration: "underline", paddingTop: "2rem"}}>Certificate</button></p>
                </form>
        </div>
    );
}

export default Achievements;
