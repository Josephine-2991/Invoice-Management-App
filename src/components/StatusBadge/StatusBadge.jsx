import React from 'react'
import './StatusBadge.css'

function StatusBadge() {
     const statusBadge=[ 'Draft', 'Pending', 'Paid' ]
  return (
    <section className='status-badge-container'>
           { statusBadge.map((individualStatus, index)=>(
            <div className='status-individual-badge'>
                <input id='check-box-style' type="checkbox" />
                <p id='c'>{individualStatus}</p>
            </div>
           ))} 
        
    </section>
  )
}

export default StatusBadge