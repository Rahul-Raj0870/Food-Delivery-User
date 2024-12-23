import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'
 import './FoodItems.css'   
const FoodItems = ({id,name,price,description,image}) => {
    // Determine the image source
    const imageUrl = typeof image === 'string' ? image : `${url}/images/${image}`;
    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
  return (
    <div className='food-itm shadow'>
        <div className='img-cont position-relative'>
            <img width={'280px'} height={'230px'} className='food-item-img rounded-top' src={imageUrl} alt="" />
            {!cartItems[id]
                ?<button style={{left:'10px',bottom:'10px',zIndex:'2',width:'35px',height:'35px',paddingLeft:'11px'}} onClick={()=>addToCart(id)} className='add btn rounded-circle position-absolute bg-light pointer d-flex align-items-center'><i className="fa-solid fa-plus"></i></button>
                :<div className='item-counter' style={{position:'absolute',bottom:'10px',left:'10px',display:'flex',alignItems:"center",gap:'10px',padding:'6px',backgroundColor:'white',borderRadius:'50px'}}>
                    <button style={{backgroundColor:'#f3a5a5',width:'35px',height:'35px',paddingLeft:'11px'}} onClick={()=>removeFromCart(id)} className='btn rounded-circle text-danger pb-2 d-flex align-items-center'><i className="fa-solid fa-minus"></i></button>
                    <p className='mb-0'>{cartItems[id]}</p>
                    <button style={{backgroundColor:'#bbf3a5',width:'35px',height:'35px',paddingLeft:'11px'}} onClick={()=>addToCart(id)} className='btn rounded-circle text-success d-flex align-items-center'><i className="fa-solid fa-plus"></i></button>

                </div>
            
            }
        </div>
        <div className='item-info p-3'>
            <div className='rating d-flex justify-content-between align-items-center my-1'>
                <p style={{fontSize:'1.1rem',fontWeight:'500'}}>{name}</p>
                <p className='text-warning'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
            </div>
            <p style={{fontSize:'14px'}} className='item-des'>{description}</p>
            <p style={{fontSize:'22px',color:'tomato',fontWeight:'500',margin:'10px 0px'}} className='item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItems