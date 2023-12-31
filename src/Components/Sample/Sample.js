import React from 'react'
import sample from '/Users/user/beeper/src/Images/62aae525e33aff74cfe5bc8d_Hero phone mockup v4.png'
import '../Sample/Sample.scss'

function Sample() {
  return (
    <div id='sample'>
        <div className='chatSample'>
            <img src={sample} alt='' className='chatImg'></img>
            
        </div>
    </div>
  )
}

export default Sample