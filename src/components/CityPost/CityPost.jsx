import React from 'react'
import './CityPost.css'

function CityPost({label}) {
  return (
    <div className='city-post-country'>
        <label className='city-post-label' htmlFor="city-post-label">{label}</label>
        <input type='text' className='city-post-input' name='street-address-label'/>
    </div>
  )
}

export default CityPost