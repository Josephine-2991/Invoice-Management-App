import React from 'react'
import './ItemList.css'
import CityPost from '../CityPost/CityPost'

function ItemList() {
  return (
    <div className='item-list-container'>
        <CityPost label="Item Name"/>
        <div className='invoice-item-qty'>
            <label id="item-qty-label" htmlFor="item-qty-input">Qty</label>
            <input type="text" name="item-qty-input" id="item-qty-input" />
        </div>
         
        <div className='invoice-item-qty'>
            <label id="item-price-label" htmlFor="item-price-input">
                Price
            </label>
            <input type="text" name="item-price-input" id="item-price-input" />
        </div>

        <div className='invoice-item-qty'>
            <label id="item-total-label" htmlFor="item-total-input">
                Total
            </label>
            <span type="text" name="item-total-input" id="item-total-input">156</span>
        </div>

    </div>
  )
}

export default ItemList