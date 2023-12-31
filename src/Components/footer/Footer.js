import React from 'react'
import logo from '/Users/user/beeper/src/Images/jdzueyiu.png'
import '../footer/Footer.scss'
import { PiCopyright } from "react-icons/pi"

function Footer() {
const year = new Date().getFullYear()

  return (
    <div id='footer'>
        <div className='details'>
            <div className='logo'>
                <img alt='' src={logo} ></img>
                <p>< PiCopyright className='icon'/> {year} Beeper Inc.</p>
            </div>

            <div className='list'>
                <div className='company'>
                    <h4>Company</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Mission</li>
                        <li>Jobs @ Beeper</li>
                        <li>Github</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                <div className='app'>
                <h4>App</h4>

                    <ul>
                        <li>Download</li>
                        <li>Beeper Mini</li>
                        <li>FAQ </li>
                        <li>Help</li>
                        <li>Changelog</li>
                        <li>Self-host</li>
                        <li>System Status</li>

                    </ul>
                </div>

                <div className='legal'>
                <h4>Legal</h4>

                    <ul>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer