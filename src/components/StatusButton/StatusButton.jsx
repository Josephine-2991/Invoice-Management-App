import React from 'react'
import './StatusButton.css'

function StatusButton({status}) {
  return (
        <button className="invoice-status-button">
           <div className="status-dot-dot"></div>
            {status}
        </button>
  )
}

export default StatusButton