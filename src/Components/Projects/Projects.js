import React from 'react'
import "../Projects/Projects.css"
import project1 from "../../assets/img-1.png"
import project2 from "../../assets/img-2.png"
import project3 from "../../assets/img-3.png"
import project4 from "../../assets/img-4.png"
import project5 from "../../assets/img-5.png"

import {FiExternalLink} from "react-icons/fi"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <h1>Projects</h1>
        <p>Here are some of my projects.</p>

        <div className="projects-container">
            <motion.div 
             initial="hidden"
             whileInView="show"
             viewport={{once:true}}
             variants={{
               hidden:{
                     opacity:0,
                     y:80,
                     transition:{
                       type:"spring",
                       stiffness:300
                     }},
               show:{
                     opacity:1,
                     y:0,
                     transition:{
                       type:"spring",
                       stiffness:100,
                       delay:.3
                     }}
             }}
            className="projects-box">
                <img src={project1} alt="project-1" />
                    <div className="projects-content">
                        <h2>React Social Media App</h2>
                        <p>"FACE GRAM" is a Social media application which has all Basic features of Facebook, Twitter.</p>
                        <div className="demo-links">
                            <a href="https://github.com/iamvijay98/Social-Media-App-Frontend" target='blank'>Github</a>
                            <a href="https://iamvijay98.github.io/Social-Media-App-Frontend/" target='blank'>Live Demo <FiExternalLink /></a>
                        </div>
                    </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                variants={{
                  hidden:{
                        opacity:0,
                        y:80,
                        transition:{
                          type:"spring",
                          stiffness:300
                        }},
                  show:{
                        opacity:1,
                        y:0,
                        transition:{
                          type:"spring",
                          stiffness:100,
                          delay:.4
                        }}
                }}
             className="projects-box">
                <img src={project2} alt="project-1" />
                <div className="projects-content">
                    <h2>Restaurant Website Design</h2>
                    <p>A static restaurant website is a simple web page that showcases a restaurant's information, menu items, and contact details.</p>
                    <div className="demo-links">
                        <a href="https://github.com/iamvijay98/Restaurant-Website-Design" target='blank'>Github</a>
                        <a href="https://iamvijay98.github.io/Restaurant-Website-Design/" target='blank'>Live Demo <FiExternalLink /></a>
                    </div>
                </div>
            </motion.div>
            

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                variants={{
                  hidden:{
                        opacity:0,
                        y:80,
                        transition:{
                          type:"spring",
                          stiffness:300
                        }},
                  show:{
                        opacity:1,
                        y:0,
                        transition:{
                          type:"spring",
                          stiffness:100,
                          delay:.5
                        }}
                }}
             className="projects-box">
                <img src={project3} alt="project-1" />
                <div className="projects-content">
                    <h2>React Todo App</h2>
                    <p>The "React Todo List with Local Storage" project is a web-based task management application developed using React.</p>
                    <div className="demo-links">
                        <a href="https://github.com/iamvijay98/Todo-List-App" target='blank'>Github</a>
                        <a href="https://iamvijay98.github.io/Todo-List-App/" target='blank'>Live Demo <FiExternalLink /></a>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                variants={{
                  hidden:{
                        opacity:0,
                        y:80,
                        transition:{
                          type:"spring",
                          stiffness:300
                        }},
                  show:{
                        opacity:1,
                        y:0,
                        transition:{
                          type:"spring",
                          stiffness:100,
                          delay:.6
                        }}
                }}
            className="projects-box">
            <img src={project4} alt="project-1" />
                <div className="projects-content">
                    <h2>Password Generator</h2>
                    <p>The Password Generator project is a web application that allows users to generate secure and random passwords for various online accounts.</p>
                    <div className="demo-links">
                        <a href="https://github.com/iamvijay98/Password-Generator" target='blank'>Github</a>
                        <a href="https://iamvijay98.github.io/Password-Generator/" target='blank'>Live Demo <FiExternalLink /></a>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                variants={{
                  hidden:{
                        opacity:0,
                        y:80,
                        transition:{
                          type:"spring",
                          stiffness:300
                        }},
                  show:{
                        opacity:1,
                        y:0,
                        transition:{
                          type:"spring",
                          stiffness:100,
                          delay:.7
                        }}
                }}
            className="projects-box">
                <img src={project5} alt="project-1" />
                <div className="projects-content">
                    <h2>CSS border Style Generator</h2>
                    <p>The CSS Border Generator is a web-based project built using HTML, CSS, and JavaScript, designed to help developers and designers create custom border styles effortlessly. </p>
                    <div className="demo-links">
                        <a href="https://github.com/iamvijay98/CSS-border-Style-Generator" target='blank'>Github</a>
                        <a href="https://iamvijay98.github.io/CSS-border-Style-Generator/" target='blank'>Live Demo <FiExternalLink /></a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects