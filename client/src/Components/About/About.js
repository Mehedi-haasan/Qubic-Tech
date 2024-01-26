import React from "react";
import Work from './Work'
import Client from './Client'
import Member from './Member'
import Skills from './Skills'


const About = () => {
  return (
    <div name='about'>
      <Work/>
      <Client/>
      <Member/>
      <Skills/>
    </div>
  );
};

export default About;
