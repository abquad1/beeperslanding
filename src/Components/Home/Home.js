import React, { useEffect, useState } from 'react'
import '../Home/Home.scss'
import logo from '/Users/user/beeper/src/Images/jdzueyiu.png'
import { Link } from 'react-router-dom';
// import { Link} from 'react-scroll';
import { FaLongArrowAltRight, FaAngleDown, FaBars  } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Sample from '../Sample/Sample';
import TextSection from '../textSection/TextSection';
import Network from '../Network/Network';
import Features from '../Features/Features';
import Cloud from '../Cloud/Cloud';
import Footer from '../footer/Footer';
import iMessage from '/Users/user/beeper/src/Images/62b04fca20d1f2d76085138d_iMessage.png'
import Instagram from '/Users/user/beeper/src/Images/62b050040313820ed88f4bfb_Instagram.png'
import Messenger from '/Users/user/beeper/src/Images/62b04ff8e7ad8fe034303445_Messenger.png'
import Slack from '/Users/user/beeper/src/Images/62b04fec2513a532a4f1c6c6_Slack.png'
import Twitter from '/Users/user/beeper/src/Images/62b0500e501088fff3334fc2_Twitter.png'
import WhatsApp from '/Users/user/beeper/src/Images/62b05019442187e3a26259b6_Whatsapp.png'
import {motion} from 'framer-motion';


function Home() {  


  const [scrollCount, setScrollCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const scrollPosition = window.scrollY;

  

  useEffect(() => {
    function handleScroll(params) {
      setScrollCount((prevCount) => prevCount + 1);
    }

    window.addEventListener("scroll", handleScroll);
    if (scrollCount >= 3) {
      setIsVisible(false);
    } else if(scrollPosition< 480){
      setIsVisible(true);
    }

    // return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollCount, scrollPosition ]);

  const [click, setClick] = useState(false)
  const barClick =()=>{
      setClick(!click)
      console.log(1)
  }

    

  return (
    <div id="home">
        <div className='navbar'>
            <div className='logo'>
            <Link to='www.beeper.com'>
                <img src={logo} alt=''></img>
            </Link>
            </div>

        <div onClick={barClick}>
            { click?(  <IoClose className='iconBar' />):(<FaBars className='iconBar' />)}
         </div>
             <div className={ click? "dropButton" : "button"} >
                <button className='btn'>New App: Beeper Mini <FaLongArrowAltRight className='icon' />  </button>
            </div>
        </div>

        <div className='jumbroton'>
            <div className='text'>
                <h1>All your chats in one app.
                Yes, really.</h1>
            </div>

            <div className='button'>
              <button className='btn'>Join the waitlist <FaLongArrowAltRight className='icon' />  </button>
              
              <motion.div
              animate={{opacity: isVisible? 1:0}}
              transition={{duration: 0.5}}
              >
                  <a href='#text-section'>
                    <FaAngleDown className='angleIcon'  id='AngleIcon'/>
                  </a>
              </motion.div>    

             </div>

             <div className='socialIcons'  >

                {/* <div className='moving-icons'> */}
                    <motion.img alt='' src={iMessage}
                     
                    ></motion.img>
                    <motion.img alt='' src={Messenger}></motion.img>
                    <img alt='' src={Instagram}></img>
                    <img alt='' src={Slack}></img>
                    <img alt='' src={WhatsApp}></img>
                    <img alt='' src={Twitter}></img>
                </div>
             {/* </div> */}
        </div>

        <Sample />
        <TextSection id="text-section"/>
        <Network />
        <Features />
        <Cloud />
        <Footer />
    </div>
  )
}

export default Home