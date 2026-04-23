import React from 'react'
import './StatusBadge.css'

function StatusBadge() {
  const statusBadge = ['Draft', 'Pending', 'Paid']

  return (
    <section className='status-badge-container'>
      {statusBadge.map((individualStatus, index) => (
        <div className='status-individual-badge' key={index}>
          <input id={`check-box-style-${index}`} type="checkbox" />
          <p>{individualStatus}</p>
        </div>
      ))}
    </section>
  )
}

export default StatusBadge