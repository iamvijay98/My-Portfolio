import React from 'react'
import "../ServicesF/Services.css"
import { MdOutlineColorLens } from "react-icons/md"
import {SiCodesignal} from "react-icons/si"
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="services" id='services'>
      <h1>What I Do</h1>
      <div className="services-group">
        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={{
          hidden:{
            opacity:0,
            x:-150
          },
          show:{
            opacity:1,
            x:0,
            transition:{
              delay:.5
            }
          }
        }}
        className="services-box">
            <MdOutlineColorLens />

            <div className="service-description">
              <h2>Canva Editing</h2>
              <p>I have a strong proficiency in using graphic design tools like Canva to craft visually appealing and engaging digital content, tailored for diverse platforms and audiences</p>
            </div>
        </motion.div>

        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={{
          hidden:{
            opacity:0,
            x:150
          },
          show:{
            opacity:1,
            x:0,
            transition:{
              delay:.5
            }
          }
        }}
        className="services-box">
            <SiCodesignal />

            <div className="service-description">
              <h2>Web Developement</h2>
              <p>I'm an enthusiastic front-end developer with a passion for creating scalable and responsive web applications. I specialize in designing and implementing entry-level projects.</p>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Services