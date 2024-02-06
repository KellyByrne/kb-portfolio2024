import {forwardRef, useEffect, useRef} from 'react';
import { BiBug } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { BiCool } from "react-icons/bi";
import { motion, useInView, useAnimation } from "framer-motion";

const Skills = forwardRef((props, ref) => {
  const animateRef = useRef(null);
  const animateFirstRef = useRef(null);
  const isInView = useInView(animateRef, {once: true});
  const inView = useInView(animateFirstRef, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView && inView) {
      mainControls.start("animate")
    }
  }, [isInView, inView])

  const parentVariant = {
    initial: { opacity: 0, y: 0},
    animate: { opacity: 1, y: 0 }
  };
  
  const childrenVariant = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 }
  };

  const headerVariant = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 }
  };



  return (
    <div ref={ref} className="skills-container">
      <motion.div ref={animateFirstRef} 
      initial="initial"
      animate={mainControls} 
      variants={headerVariant}
      transition={{duration:0.7}} 
      className="container">
        <h3>About</h3>
      </motion.div>

      <motion.div ref={animateRef} 
      initial="initial" 
      animate={mainControls} 
      transition={{ duration:0.5, staggerChildren: 0.5}} 
      variants={parentVariant} 
      className="parent-container">
        <motion.div className="child" variants={childrenVariant}   >
          <div className="circle"><FaRegLightbulb/></div>
          <div class="circle-title">Problem Solver</div>
          <div class="circle-text"v>I'm creative & persistent when it comes to solving problems</div>
        </motion.div>
        <motion.div className="child" variants={childrenVariant} >
          <div className="circle"><BiBug /></div>
          <div class="circle-title">Expert Debugger</div>
          <div class="circle-text">I'm great at writing tests and fixing bugs</div>
        </motion.div>
        <motion.div className="child" variants={childrenVariant} >
          <div className="circle"><BiCool/></div>
          <div class="circle-title">Team Player</div>
          <div class="circle-text">I'm a great communicator & team player</div>
        </motion.div>
        <motion.div className="child" variants={childrenVariant} >
          <div className="circle"><MdDevices /></div>
          <div class="circle-title">Responsive</div>
          <div class="circle-text">I write responsive code that looks good on all devices</div>
        </motion.div>
      </motion.div>
    </div>

  );
});

export default Skills;
