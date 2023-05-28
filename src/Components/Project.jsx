import React from 'react';
import Projects from './Projects';

const obj = {
    one :{
        title:"YouTubeMate",
        d1:"Developed a Youtube like application using ReactJs and Material UI which is responsive in nature. User can stream videos from variety of content creators and genres. Interface is similar to Youtube.",
        d2:`Users can search for content of their preference based on genre`,

        tech : {
            css:require('../assets/css.png'),
            html:require('../assets/html-5.png'),
            js:require('../assets/javascript.png'),
            react:require('../assets/react.png'),
            mui:require('../assets/material-ui.png')
        },
        button:{
            site:"https://youtubemate1.netlify.app/",
            github:"https://github.com/Shubham-100/YouTubeMate"
        },
        img:require('../assets/project.PNG')
    },
        two: {
            title:"Movies Recommendation App",
            d1:"This Website is similar to Watch Pedia where you can see the rating and launch dates of movies and web series",
            d2:"User can see the Trending Movies, Shows, Web series on the internet. Trailer and information about the Movies and Web series also available",
            tech : {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                mui:require('../assets/material-ui.png')
            },
            button:{
                site:" https://startling-pothos-879818.netlify.app/",
                github:"https://github.com/Shubham-100/Movies-TV-shows"
            },
            img:require('../assets/movies.PNG')
        },
        fourth:{
            title:"Sorting Visualizer",
            d1:"This Project is all about the sorting (visualise) i.e both internal and external sort.",
            d2:`
            Internal Sort
                Bubble Sort,
                Insertion Sort,
                Selection Sort,
                Quick Sort,
                Merge Sort,
                Counting Sort,
                Heap Sort`,
            d3:`
            External Sort
                K Way Merge External Sort,
                Replacement Selection Sort,
                User can also download the files (i.e both sorted and unsorted array files)
            `,
            tech:{
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                nodejs:require('../assets/nodejs.png'),
                antd:require('../assets/ant.png')
            },
            button:{
                site:"https://sorting-visualizer-main-g54y-n1uhb2eja-ayushmaan2001.vercel.app/",
                github:"https://github.com/Ayushmaan2001/sorting-visualizer-main"
            },
            img:require('../assets/sorting.PNG')
        },
    }

const Project = () => {
    return (
        <div className='bg-fifth p-40'>
            <div><h2 className='text-[1.4em]'>Work</h2></div>
            <div><h3 className='text-[#1c2273] text-[2.1rem]'>A Selection of Stuff I've Built</h3></div>
            <Projects title={obj.one.title} d1={obj.one.d1} d2={obj.one.d2} d3={obj.one.d3} tech={obj.one.tech} site={obj.one.button.site} github={obj.one.button.github} img={obj.one.img}/>
            <Projects  title={obj.two.title} d1={obj.two.d1} d2={obj.two.d2} d3={obj.two.d3} tech={obj.two.tech} site={obj.two.button.site} github={obj.two.button.github} img={obj.two.img}/>
            <Projects  title={obj.fourth.title} d1={obj.fourth.d1} d2={obj.fourth.d2} d3={obj.fourth.d3} tech={obj.fourth.tech} site={obj.fourth.button.site} github={obj.fourth.button.github} img={obj.fourth.img}/>
        </div>
    );
}

export default Project;
