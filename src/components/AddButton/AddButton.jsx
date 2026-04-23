import React from 'react'
import './AddButton.css'

function AddButton({ label }) {
  return (
    <>
        <button className='add-new-item'>+ {label}</button>
    </>
  )
}

export default AddButton