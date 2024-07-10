import React from 'react'
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills sectionn" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle"><center>My Technical Level</center></span>

        <div className="skills_container container grid">
            <Frontend />
            <Backend />
            <web3/>

        </div>
    </section>
  )
}

export default Skills
