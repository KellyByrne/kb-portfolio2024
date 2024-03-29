import JobBox from "../components/JobBox";
import * as projectsArray from '../assets/projects.json';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import Header from "./Header";
import Skills from "./Skills";
import Menu from "../components/Menu";
import About from './About';
import Footer from '../components/Footer';

function MainPage() {
    const [projects, setProjects] = useState(projectsArray.projects);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const isInView = useInView(projectsRef, {once: true});
    const inView = useInView(skillsRef, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(inView) {
          mainControls.start("animate")
        }

      }, [ inView])
    
    
    const content = projects.map((project) => {
        return (
            <motion.div key={project.id} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}> 
                <JobBox key={project.id} id={project.id} image={project.coverImage} employer={project.employer} jobTitle={project.jobTitle} description={project.shortDescription}>
                </JobBox>
            </motion.div>  
        )
    });

    const scrollToSkills = () => {
        window.scrollTo({
            top: skillsRef.current.offsetTop,
            behavior: "smooth",
        });
    };

   
    return (
        <>
        <Menu/>
        <Header onButtonClick={scrollToSkills}></Header>
        <Skills ref={skillsRef}></Skills>
        <About></About>
        <motion.div className="projects" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}> 
            <h3>Projects</h3>
        </motion.div>
        <div ref={projectsRef} className="container">
            {content}
        </div>
        <Footer></Footer>
        </>
    );
}

export default MainPage;