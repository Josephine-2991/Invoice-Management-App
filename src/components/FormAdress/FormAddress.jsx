import React from 'react'
import './FormAddress.css'

function FormAddress({label, placeholder}) {
  return (
        <div className='form-street-address'>
            <label id='street-address-label' htmlFor="street-address-label">{label}</label>
            <input type='text' id='street-address-input' name='street-address-label' placeholder={placeholder}/>
        </div>
  )
}

export default FormAddress