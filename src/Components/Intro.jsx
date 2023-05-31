import React from 'react';

const Intro = ({HOME} ) => {
    return (
        <div ref={HOME} id='intro' className='h-[40rem]' >
            <div className='w-[16rem] h-[10rem] p-2'>
                <img src={require('../assets/Laptop.jpg')} className='mt-20'/>
            </div>
            <div className='flex flex-row justify-around items-baseline'>
            <div className='flex flex-col m-[3rem] p-[6rem] text-6xl'>
                <div>
                    <h1 style={{color: "white"}}>Hey visitor👋 Welcome!, I'm <b style={{color: "blue"}}>Shubham</b> scroll⬇️ to know more about me</h1>
                </div>
            </div>
            <div>
            <div className='w-[16rem] h-[8rem] mt-10'>
                <img src={require('../assets/Devjpg.jpg')} />
            </div>
            </div>
            </div>
        </div>
    );
}

export default Intro;