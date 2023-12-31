import React, { useState} from 'react'
import '../Features/Feature.scss'
import {motion} from 'framer-motion'
function Features() {
    const [expanded, setExpanded] = useState([])

const toggleHeight= (index) =>{
    if (expanded.includes(index)) {
        const updated = expanded.filter((o) => o!== index)

        setExpanded(updated)
        
    } else{
        setExpanded([...expanded, index])
        
    }
   }

  return (
    <div id='Feature'>
        <div className='Main' >
            <h1> More features you’ll love</h1>

            
            <div className='features'>
                <div className='left'>
                    <motion.div className='protocol' 

                        initial= {{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}} 

                    onClick={()=>toggleHeight('1')}
                    style={{height: expanded.includes('1')? '170px' : 'auto',
                    overflow: 'hidden',
                    transition: 'height 0.1s ease'
                }}
                    >
                        <h2>Open Source Protocol</h2>
                        <h3>Remember this XKCD comic? That’s why we built Beeper Cloud on the open 
                            source chat protocol Matrix. Unlike other chat networks, there is no lock-in.
                             You’re free to use open source Matrix clients to connect to Beeper Cloud, or download your data and
                              move to a different Matrix server and continue chatting with your friends on Beeper Cloud.
                        </h3>

                        <h3>
                            Beeper contributes back to the Matrix community. All of our Matrix
                            bridges are open source on our Github. Don't want to pay for Beeper 
                            Cloud? Self-host your own instance for free.
                        </h3>
                    </motion.div>

                    <motion.div className='desktop' 
                    initial= {{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}} 

                     onClick={()=>toggleHeight('2')}
                     style={{height: expanded.includes('2')? '170px' : 'auto',
                     overflow: 'hidden',
                     transition: 'height 0.3s ease'
                 }}
                    >
                        <h2>Powerful Desktop App</h2>
                        <h3>Most chat apps treat desktop as a second class citizen. Not us! Our desktop app is fast, fully-featured and 
                            full of keyboard shortcuts to help you get through your inbox. Beeper Cloud runs on Windows, Mac OS, Linux
                             and Chrome OS.
                        </h3>
                    </motion.div>

                    <motion.div className='apps'
                    initial= {{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}} 

                      onClick={()=>toggleHeight('3')}
                      style={{height: expanded.includes('3')? '170px' : 'auto',
                     overflow: 'hidden',
                     transition: 'height 0.3s ease'
                 }}
                    >
                        <h2>15 Chat Networks - 1 App</h2>
                        <h4>Beeper Cloud Supports:</h4>
                        <ul>
                            <li>Whatsapp</li>
                            <li>Slack</li>
                            <li>Facebook Messenger</li>
                            <li>Google Chat</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>iMessage</li>
                            <li>IRC(Libra.chat)</li>
                            <li>Andriod SMS</li>
                            <li>Matrix</li>
                            <li>Telegram</li>
                            <li>Discord</li>
                            <li>Signal</li>
                            <li>Linkedin</li>
                            <li>Beeper</li>
                        </ul>
                    </motion.div>
                </div>

                <div className='right'>
                <motion.div className='securedChat'
                initial= {{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}} 

                  onClick={()=>toggleHeight('4')}
                  style={{height: expanded.includes('4')? '170px' : 'auto',
                 overflow: 'hidden',
                 transition: 'height 0.3s ease'
             }}
                >
                        <h2>Secure Encrypted Chat</h2>
                        <h3>Privacy is a fundamental human right. We will uphold the privacy and security of the data you send and
                             receive on Beeper Cloud. We will never profit by selling your data. Read FAQ for more details.

                        </h3>

                        <h3>All Beeper Cloud chat messages are end-to-end encrypted. Messages sent using Beeper Cloud to other chat 
                            networks are re-encrypted if the other network supports encryption (like Signal, WhatsApp and iMessage).
                        </h3>
                    </motion.div>

                    <motion.div className='mode'
                    initial= {{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}} 

                      onClick={()=>toggleHeight('5')}
                      style={{height: expanded.includes('5')? '170px' : 'auto',
                     overflow: 'hidden',
                     transition: 'height 0.3s ease'
                 }}
                    >
                        <h2>Dark Mode</h2>
                        <h3>We definitely have dark mode!</h3>
                    </motion.div>

                    <motion.div className='model'
                    initial= {{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}} 

                     onClick={()=>toggleHeight('6')}
                     style={{height: expanded.includes('6')? '170px' : 'auto',
                     overflow: 'hidden',
                     transition: 'height 0.3s ease'
                 }}
                    >
                        <h2>Our Business Model Is Simple</h2>
                        <h3>We are building the best chat app on Earth. No ads. No siphoning and selling personal data. No BS. We sell an
                             optional paid subscription with premium features. Our business model means that our interests are 100% aligned with our customers.

                        </h3>

                    </motion.div>

                </div>  
            </div>
        
        </div>
    </div>
  )
}

export default Features