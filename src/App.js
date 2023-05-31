import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Achievements from './Components/Achievements';
import React, {useRef} from 'react'


function App() {
  const HOME = useRef()
  const PROJECTS = useRef()
  const ACHIEVEMENTS = useRef()
  const ABOUT_ME = useRef()
  const SKILLS = useRef();

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }

  return (
    <React.Fragment>
      <Navbar HOME={HOME} PROJECTS={PROJECTS} ACHIEVEMENTS={ACHIEVEMENTS} ABOUT_ME={ABOUT_ME} scrollToSection={scrollToSection} SKILLS={SKILLS}/>
      {/* <Intro id="" HOME={HOME}/> */}
      <AboutUs id="aboutus" ABOUT_ME={ABOUT_ME}/>
      <Skills id="skills" SKILLS={SKILLS}/>
      <Project id="projects" PROJECTS={PROJECTS}/>
      <Achievements ACHIEVEMENTS={ACHIEVEMENTS}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
