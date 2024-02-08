import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("animate")
    }
  }, [isInView])

  const parentVariant = {
    initial: { opacity: 0, y: 0},
    animate: { opacity: 1, y: 0 }
  };
  
  const childrenVariant = {
    initial: { opacity: 0, x: 330 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <div className="container about-container" ref={aboutRef}>
        <motion.div className="right" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7}}> 
          <div className="picture-circle"></div>  
          <div class="info">I'm a Full Stack JavaScript Developer. I am passionate about writing clean, reusable code, learning new things and growing my skillset. </div>  
        </motion.div> 
      <motion.div
      initial="initial" 
      animate={mainControls} 
      transition={{ duration:0.5, staggerChildren: 0.3}} 
      variants={parentVariant} 
      className="parent-container flex bars-wrap left">
          <motion.div className="bar flex" variants={childrenVariant}   >
            <div class="bar fill" style={{width: "100%"}}>
              <div class="tag bold flex">CSS</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "100%"}}>
              <div className="tag bold flex">HTML</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "95%"}}>
              <div className="tag bold flex">JavaScript</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "95%"}}>
              <div className="tag bold flex">React</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "95%"}}>
              <div className="tag bold flex">Redux</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "95%"}}>
              <div className="tag bold flex">Angular</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant} >
            <div className="bar fill" style={{width: "90%"}}>
              <div className="tag bold flex">Node.js/Express</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant} >
            <div className="bar fill" style={{width: "90%"}}>
              <div className="tag bold flex">MySQL/Postgres SQL</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}>
            <div className="bar fill" style={{width: "85%"}}>
              <div className="tag bold flex">Ionic</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}>
            <div className="bar fill" style={{width: "85%"}}>
              <div className="tag bold flex">Agile/Scrum/Sprints</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}>
            <div className="bar fill" style={{width: "80%"}}>
              <div className="tag bold flex">Figma</div>
            </div>
          </motion.div>

          <motion.div className="bar flex" variants={childrenVariant}   >
            <div className="bar fill" style={{width: "60%"}}>
              <div className="tag bold flex">Ruby on Rails</div>
            </div>
          </motion.div>

        </motion.div>
    </div>

  )
}

export default About;