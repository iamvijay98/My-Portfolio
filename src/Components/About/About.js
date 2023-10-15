import React from 'react'
import "../About/About.css"
import CV from "../../assets/VIJAYARAGAVENDRAN.pdf"
import { motion } from 'framer-motion'
import profile from "../../assets/WhatsApp Image 2023-09-28 at 12.02.57 PM.jpeg"


const About = () => {
  return (
    <div className="about" id='about'>
        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={{
          hidden:{
            opacity:0,
            x:-100
          },
          show:{
            opacity:1,
            x:0,
            transition:{
              duration:.5,
              delay:.5
            }
          }
        }}
        className="about-left">
              <img src={profile} alt="myImage"/>
        </motion.div>

        <div className="about-right">
            <h1>About Me</h1>
          <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          variants={{
            hidden:{
              opacity:0,
              x:100
            },
            show:{
              opacity:1,
              x:0,
              transition:{
                duration:.5,
                delay:.5
              }
            }
          }}
          className="aboutMe-content">
            <p> passionate front-end web developer eager to create beautiful, user-friendly websites. I blend design and code to craft compelling digital experiences. Let's build something amazing together!. I specialize in front-end development and am excited to kick-start my career in web development.</p>
            <div className="cv">
              <a href={CV} download>Check Resume</a>

              <div className="details-group">
                <div className="details">
                  <h2>Completed Projects</h2>
                  <p>5+</p>
                </div>

                <div className="details">
                  <h2>Year Of Expericene</h2>
                  <p>Fresher</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
    </div>
  )
}

export default About