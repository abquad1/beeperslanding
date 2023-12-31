import React from 'react'
import '../Cloud/Cloud.scss'
import cloud from '/Users/user/beeper/src/Images/zmlolujo.png'
import chats from '/Users/user/beeper/src/Images/648af12deb905c3acb5fe9c7_screenshot no background-p-1600.png'
import {easeIn, motion} from 'framer-motion'

import { FaLongArrowAltRight, FaCheck } from "react-icons/fa";

function Cloud() {
  return (
    <div id='cloud'>
        <div className='clouds'>
            <div className='main'>
                <img alt='' src={cloud}></img><span><h1>Get Beeper Cloud</h1></span>
            </div>

            <div className='jumbroton'>
                <h4>
                    Available on Mac OS, Windows, Linux
                    iPhone, iPad, Android and Chrome OS
                </h4>    
                <button className='btn'>Join the waitlist <FaLongArrowAltRight className='icon' />  </button>
              </div>

              <div className='quality'>
                <ul>
                    <li> <FaCheck className='icon' />15 Chat Networks</li>
                    <li> <FaCheck className='icon'/>Unified Inbox</li>
                    <li> <FaCheck className='icon'/>Chat Superpowers</li>
                </ul>
              </div>

              <motion.div className='chatImage'
              initial= {{opacity: 0, y:40}}
              viewport={{once:true}}
              whileInView={{opacity: 1, y:0}}
              exit={{opacity: 1}}
          transition={{duration: 0.5, ease: easeIn}} 

              >
                <img alt='' src={chats}></img>
              </motion.div>
        </div>  
    </div>
  )
}

export default Cloud