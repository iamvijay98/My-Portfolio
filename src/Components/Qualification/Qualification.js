import React from 'react'
import "../Qualification/Qualification.css"
import { motion } from 'framer-motion'

const Qualification = () => {
  return (
    <div className="qualification" id='qualification'>
        <h1>Qualification</h1>
        <p>Education</p>

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
              delay:.5,
              type:"spring",
              stiffness:100,
            }
          }
        }}
        className="outer">
            <div className="education-lists">
                    <h2>Full Stack Web Developement</h2>
                    <p>Elysium Academy, Madurai.</p>
                    <small>April 2023 - July 2023</small>
            </div>

            <div className="education-lists">
                    <h2>Latha Mathavan Engineering College, Madurai.</h2>
                    <p>Bachelor of Engineering - Mechanical Engineering</p>
                    <small>2015 - 2019</small>
                    <p className='Elpara'>Grade: 7.20 CGPA</p>
            </div>

            <div className="education-lists">
                    <h2>Sourashtra Higher Secondary School, Madurai.</h2>
                    <small>2014 - 2015</small>
                    <p className='Elpara'>12th - Grade: 65.6%</p>
            </div>

            <div className="education-lists">
                    <h2>Sourashtra Higher Secondary School, Madurai.</h2>
                    <small>2012 - 2013</small>
                    <p className='Elpara'>10th - Grade: 76.6%</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Qualification