import React from 'react';

const Achievements = ({ACHIEVEMENTS}) => {
    return (
        <div ref={ACHIEVEMENTS} className='p-40 bg-third' ref={ACHIEVEMENTS}>
            <h1 className='text-[1.4em] my-5 text-[#1c2273]'>Achievements</h1>
                <p className='text-[1.2rem]'>I am a passionate problem solver with a strong background in computer science. I have successfully solved over 300+ problems on LeetCode, demonstrating my proficiency in algorithmic problem-solving. Additionally, I actively participated in Hacktoberfest 2020. I also took part in NGFS and Olympiad, where I received certificates of appreciation and participation for my exceptional performance. These experiences have honed my skills in teamwork, critical thinking, and creativity. With a proven track record of excellence, I am eager to apply my expertise and contribute to challenging projects in the field of technology.
                </p>
        </div>
    );
}

export default Achievements;
