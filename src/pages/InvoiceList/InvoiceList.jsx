import React from 'react'

import RectangularBar from '../../components/RectangularBar/RectangularBar'
import arrowDown from './../../assets/Arrow-Down.svg'
import plusIcon from './../../assets/Plus.svg'
import InvoiceBar from '../../components/InvoiceBar/InvoiceBar'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import Form from '../../components/Form/Form'
import './InvoiceList.css'

function InvoiceList() {
  return (
    <>
        <section id="invoice-main-container">
            <RectangularBar/> 
            <StatusBadge/>
            <Form/>

            <div className="invoice-middle-container">
                <header className="invoice-header-container">
                   <div className="invoice-header-text-container">
                        <h1 className="invoice-header-text">Invoice</h1>
                        <p className="invoice-header-description">There are 4 pending invoices</p>
                   </div>

                   <div className='invoice-filter-button'>
                        <div className='invoice-filter-button-text'>
                            <p className="invoice-filter-status-text">Filter by status</p>
                            <img className="invoice-arrow-down" src={arrowDown} alt="arrow-down"/>
                        </div>

                        <button className="invoice-add-button">
                            <div className="invoice-add-button-image">
                                <img id="invoice-add-button-icon" src={plusIcon} alt="add-invoice"/>
                            </div>

                            <p className="invoice-add-button-text">New Invoice</p>
                           
                        </button>
                   </div>
                </header> 


                <div className='invoice-list-container'>
                    <InvoiceBar/>
                    <InvoiceBar/>
                    <InvoiceBar/>
                    <InvoiceBar/>
                </div>

                
               
            </div>
            



        </section>
    </>
  )
}

export default InvoiceList