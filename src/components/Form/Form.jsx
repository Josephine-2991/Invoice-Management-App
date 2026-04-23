import React from 'react'
import './Form.css'
import CityPost from '../CityPost/CityPost'
import FormAddress from '../FormAdress/FormAddress'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { useState, useRef, useEffect } from "react";
import arrowDown from './../../assets/Arrow-Down.svg'
import deleteIcon from './../../assets/Delete-Icon.svg'
import ItemList from '../ItemList/ItemList';
import AddButton from '../AddButton/AddButton';
import SaveDraaftSendButton from '../SaveDraftSendButton/SaveDraaftSendButton';


function Form() {
    const cityPostCountry= ['City', 'Post Code', 'Country']
    
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select Payment Terms");
    const dropdownRef = useRef();

    const options = ["Net 1 day", "Net 7 days", "Net 14 days", "Net 30 days"];
    const toggleDropdown = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (e) => {
          if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
      }, []);

     const saveAsDraftSendButtons = [
        {id: 1, label: "Save as Draft", width: "133px", backgroundColor: "var(--deep-blue-color)", color: "var(--gray-color)"},
        {id: 2, label: "Save & Send", width: "133px", backgroundColor: "var(--secondary-purple-color)", color: "var(--gray-color)"},
     ]
  return (
    <form className='form-main-container' for=''>
        <h2 className='form-main-heading'>New Invoices</h2>
        <h3 className='form-bill-heading'>Bill From</h3>

        <div className='form-street-address'>
            <label id='street-address-label' htmlFor="street-address-label">Street Address</label>
            <input type='text' id='street-address-input' name='street-address-label'/>
        </div>

        <div className='city-postcode-country'>
            { 
                cityPostCountry.map((individualLabel, index)=>(
                    <CityPost key={index} label={individualLabel}/>

                ))
            }
        </div>
        
        <h3 className='form-bill-heading'>Bill To</h3>

        <FormAddress label="Client's Name"/>
        <FormAddress label="Client's Email"/>
        <FormAddress label="Street Address"/>

        <div className='city-postcode-country'>
           { 
                cityPostCountry.map((individualLabel, index)=>(
                    <CityPost key={index} label={individualLabel}/>

                ))
            }
        </div>

        <div className='invoice-payment-terms'>
            <div className='invoice-label-input'>
                <label id='invoice-date-label' htmlFor='invoice-date-input'>Invoice date</label>
                <div>
                <Flatpickr
                    className='payment-terms-options'
                    value={date}
                    onChange={(selectedDates) => setDate(selectedDates[0])}
                    options={{
                    dateFormat: "d M Y", 
                    position: "below left", 
                    static: false,

                        }}
                />
            </div>


            </div>

            <div className='payment-terms-duration'>
                <div className='invoice-label-input'>
                    <label id='payment-terms-label' htmlFor="payment-terms-options">Payment Terms</label>
                    <div className="dropdown" ref={dropdownRef}>
                        <div
                            className="dropdown-selected"
                            onClick={() => setOpen(!open)}
                        >
                        {selected}
                        <img  className={`arrow ${open ? "open" : ""}`} src={arrowDown} alt="Arrow down"/>
                        </div>


                        {open && (
                        <div className="dropdown-options">
                        {options.map((option) => (
                            <div
                            key={option}
                            className="option"
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            >
                            {option}
                            </div>
                                ))}
                            </div>
                        )}
                            </div>
                </div>    
            </div>
        </div> 

        <FormAddress label="Project Description" placeholder="e.g. Graphic Design"/>

        <div className='item-list-main'>
            <h3 id='item-list-heading'>Item List</h3>

            <div className='item-name-qty'>
                <ItemList label="Item Name"/>
                <img src={deleteIcon} alt="Delete" />
            </div>

            <AddButton label="Add New Item"/>

            <div className='save-draft-send-container'>
               <SaveDraaftSendButton
                label="Discard"
                width="96px"
                backgroundColor="var(--off-white-color)"
                color="var(--secondary-purple-color)" 
                />

               <div className='draft-send-buttons'>
                  {saveAsDraftSendButtons.map((button) => (
                     <SaveDraaftSendButton
                        key={button.id}
                        label={button.label}
                        width={button.width}
                        backgroundColor={button.backgroundColor}
                        color={button.color}
                        
                     />
                  ))}
               </div>
            </div>
            



            



           
            
        </div>

        

        
    </form>
  )
}

export default Form