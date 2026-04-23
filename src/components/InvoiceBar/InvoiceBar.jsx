import React from 'react'
import StatusButton from '../StatusButton/StatusButton'
import nextArrow from './../../assets/Next-Arrow.svg'
import StatusBadge from '../StatusBadge/StatusBadge'
import './InvoiceBar.css'

function InvoiceBar() {
  return (
    <section className='invoice-bar-container'>
      
       <div className='invoice-details-container'>
          <p className='batch-amount'><span id='invoice-number-prefix'>#</span>XM9141</p>
          <p id='due-date-text'>Due 25 Aug 2021</p>
          <p id='customer-name-text'>Aylen Walmer</p>
       </div>
       <div className='invoice-amount-container'>
          <p className='batch-amount'>$556.00</p>

          <div className='invoice-status-arrow'>
            <StatusButton status='Pending'/>
            <img src={nextArrow} alt='next-arrow' />
        </div>
        </div>

       
        
        

       
        
        
        
    </section>
  )
}

export default InvoiceBar