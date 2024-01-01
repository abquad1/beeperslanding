import React from 'react'
import founder1 from '../Images/6283b767cd025bcd56e70868_60071637eae24c6e03b920ab_eric headshot 1.png'
import founder2 from '../Images/6283b7670d0b4a2afdf57def_60327efa1e2df1abee5a43fc_brad 1.png'
import '../textSection/TextSection.scss'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function TextSection() {
  return (
    <div id='text-section'>
        <div>
            <motion.div className='about'
            initial= {{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}} 

            >
                <h3>We're building the best chat app on Earth</h3>
                <p>Chat today is broken. We have 5-10+ different chat apps on our 
                    phones, each for a different set of contacts. There's no unified inbox or search.
                     Our inbox is cluttered with one-time codes and spam.</p>

                 <p>So, we're fixing it. Beeper Cloud is a universal chat app. It’s a single app to chat
                     with friends on 15 different chat networks. We’ve added chat superpowers that make it 
                     the best chat app on earth.</p>    

                   <p>Apple, Facebook and Google control the majority of chat apps right now. For them, chat is just a minor
                     part of their main business. Their chat apps exist primarily to lock people in to their advertising or hardware 
                     walled-gardens.</p>  

                    <p>Our approach is different. Chat is our only business. We love chat and are 100% dedicated to making it awesome. 
                        Read more of our chat manifesto.</p> 
            </motion.div>

            <div className='founders'>
                <div className='coFounder'>
                    <img src={founder1} alt=''></img>

                    <div className='details'>
                        <Link to='www.twitter.com/ericmigi'>
                        <h3>Eric Migixovsky</h3>
                        <h2>Co-founder</h2>
                        </Link>
                    </div>
                </div>

                <div className='coFounder'>
                    <img src={founder2} alt=''></img>

                    <div className='details'>
                        <Link to='www.twitter.com/bradtgmurray'>
                            <h3>Brad Murray</h3>
                            <h2>Co-founder</h2>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default TextSection