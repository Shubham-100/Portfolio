import React from 'react';
import ToolsAndSkills from './ToolsAndSkills';

const Skills = ({SKILLS} ) => {
    return (
        <div ref={SKILLS} className='mt-5 ml-0 p-5'>
            <div className='text-[orange] font-semibold text-[1.4em] p-1'>Skills and Tools</div>
            <div className='text-[white] font-bold text-[2.1rem] p-1'>My Toolbox & Things I Can Do</div>
            <div className='text-[orange] flex flex-row flex-wrap justify-around md:justify-normal '>
                <ToolsAndSkills img={require('../assets/c-.png')} name={"C++"}/>
                <ToolsAndSkills img={require('../assets/branch.png')} name={"GIT"}/>
                <ToolsAndSkills img={require('../assets/css.png')} name={"CSS"}/>
                <ToolsAndSkills img={require('../assets/ds.png')} name={"DATA STRUCTURE"}/>
                <ToolsAndSkills img={require('../assets/github.png')} name={"GITHUB"}/>
                <ToolsAndSkills img={require('../assets/html-5.png')} name={"HTML"}/>
                <ToolsAndSkills img={require('../assets/javascript.png')} name={"JAVASCRIPT"}/>
                <ToolsAndSkills img={require('../assets/machine-learning.png')} name={"ALGORITHM"}/>
                <ToolsAndSkills img={require('../assets/nodejs.png')} name={"NODEJS"}/>
                <ToolsAndSkills img={require('../assets/react.png')} name={"REACTJS"}/>
                <ToolsAndSkills img={require('../assets/sql.png')} name={"SQL"}/>
            </div>
        </div>
    );
}

export default Skills;
