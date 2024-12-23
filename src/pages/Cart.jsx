import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalAmount,url} = useContext(StoreContext)
 const navigate = useNavigate()
  return (
    <div className='cart mt-5'>
      <div className='cart-itm'>
        <div className='itm-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((item,index)=>{
          if(cartItems[item._id]>0){
            // Determine the image source
          const imageUrl = typeof item.image === 'string' ? item.image : `${url+"/images/"+item.image}`;
            return(
              <div>
                <div className='itm-title items text-light'>
                  <img src={imageUrl} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <button onClick={()=>removeFromCart(item._id)} className='btn text-light shadow-none'><i className="fa-brands fa-x"></i></button>
                </div>
                <hr style={{height:'2px',backgroundColor:'white',border:'none'}} />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-btm'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='total-details'>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className='total-details'>
              <p>Deliver Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='total-details'>
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')} className='btn btn-success'>Proceed to checkout</button>
        </div>
        <div className='promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='promo-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart