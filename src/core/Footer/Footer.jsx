import React from 'react'
import { Footercss } from './Footer.style'

const Footer = () => {
  return (
    <Footercss>
        <h3>
            <span>
            {new Date().getFullYear()}
            </span>
            <span>
                @
            </span>
            <span>
                Hertz
            </span>
        </h3>
        <h3>
            Privacy & Terms 
        </h3>
    </Footercss>
  )
}

export default Footer