import './RectangularBar.css'
import Rectangle from '../../assets/rectangle.png'
import Group from '../../assets/Group-9.png'
import Oval from '../../assets/Oval.png'
import Path from '../../assets/Path.png'
import React from 'react'

function RectangularBar() {
  return (
    <div id="invoice-rectangular-container">
        <img id="invoice-rectangle-image" src={Rectangle} alt="rectangle"/>
        <img id="invoice-group-image" src={Group} alt="group"/>
        <img id="invoice-moon-image" src={Path} alt="moon"/>
        <hr id="invoice-line-image"/>
        <img id="invoice-circular-image" src={Oval} alt="circular image" />
    </div>
  )
}

export default RectangularBar