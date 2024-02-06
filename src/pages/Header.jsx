import React from 'react';
import { motion } from "framer-motion";

function Header({onButtonClick}) {

  return (
    <div className="header">
      <h1>Hello, I'm <span>Kelly Bennett</span></h1>
      <h2>I'm a full stack web developer.</h2> 
      <motion.button onClick={onButtonClick} whileTap={{scale: 0.8}} className="btn btn-white">
       View My Work
      </motion.button>
    </div>
  )
  
}

export default Header;