import React from 'react'
import '../Network/Network.scss'
import {motion} from 'framer-motion';
import icon1 from '../Images/62b04fca20d1f2d76085138d_iMessage.png'
import icon2 from '../Images/62b0500e501088fff3334fc2_Twitter.png'
import icon3 from '../Images/62b04fec2513a532a4f1c6c6_Slack.png'
import icon4 from '../Images/62b050040313820ed88f4bfb_Instagram.png'
import icon5 from '../Images/qmgv4axs.png'
import icon6 from '../Images/qrevqtpn.png'
import icon7 from '../images/1d06m3jp.png'
import icon8 from '../Images/62b04ff8e7ad8fe034303445_Messenger.png'
import icon9 from '../Images/62b05019442187e3a26259b6_Whatsapp.png'
import icon10 from '../Images/1d06m3jp.png'
import icon11 from '../Images/qk1vttnh.png'
import icon12 from '../Images/2swl00xx.png'
import icon13 from '../Images/z594laaa.png'
import icon14 from '../Images/zdspfpb3.png'


function Network() {
  return (
    <div id='networks'>
        <div className='text'>
            <h2>One unified inbox</h2>
            <h4>Beeper Cloud connects to all of your favorite chat networks</h4>
        </div>

        <motion.div className='icons'
        initial= {{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
        >
          
            <img alt='' src={icon1}></img>
            <img alt='' src={icon2}></img>
            <img alt='' src={icon3}></img>
            <img alt='' src={icon4}></img>
            <img alt='' src={icon5}></img>
            <img alt='' src={icon6}></img>
            <img alt='' src={icon7}></img>
          
        
            <img alt='' src={icon8}></img>
            <img alt='' src={icon9}></img>
            <img alt='' src={icon10}></img>
            <img alt='' src={icon11}></img>
            <img alt='' src={icon12}></img>
            <img alt='' src={icon13}></img>
            <img alt='' src={icon14}></img>
          
        </motion.div>
    </div>
  )
}

export default Network