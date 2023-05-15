import React, { useState } from 'react'
import './qualification.css';

export default function Qualification() {

    const [toggleState, setToggleState]=useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle"><center>My Personal journey</center></span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1?"qualification_button qualification_active button--flex":"qualification_button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>
                <div className={toggleState === 2?"qualification_button qualification_active button--flex":"qualification_button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>

            <div className="qualification_sections">
            <div className={toggleState === 1?"qualification_content qualification_content-active":"qualification_content"}>
                    <div className="qualification_data">
                        <div >
                            <h3 className="qualification_title">10th</h3>
                            <span className="qualification_subtitle">R.L.B school</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>

                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div >
                            <h3 className="qualification_title">12th</h3>
                            <span className="qualification_subtitle">R.L.B school</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2020
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">
                        <div >
                            <h3 className="qualification_title">COMPUTER SCIENCE(B.tech)</h3>
                            <span className="qualification_subtitle">ABES ENG. COLLEGE</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2021 present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    
                </div>
                
                <div className={toggleState  === 2 ?"qualification_content qualification_content-active":"qualification_content"}>
                    <div className="qualification_data">
                        <div >
                            <h3 className="qualification_title">WEB DEVELOPMENT</h3>
                            <span className="qualification_subtitle">self taught</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2021 present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>

                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div >
                            <h3 className="qualification_title">MERN STACK</h3>
                            <span className="qualification_subtitle">self taught</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2021 present
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">
                        <div >
                            <h3 className="qualification_title">Web3</h3>
                            <span className="qualification_subtitle">self taught</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
