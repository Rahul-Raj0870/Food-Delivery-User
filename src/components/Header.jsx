import React from 'react'
import './Header.css'
import imgHead from '../assets/images/headerimg.webp'
const Header = () => {
  return (
    <div className='Header my-5 position-relative'>
        <img className='bgimg' src={imgHead} alt="" />
        <div className='header-cont mx-3 my-3 text-light'>
            <h2>Order your  <br />favourite food here</h2>
            <p>Choose from a diverse menue featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise. Our mission is to satisfy your cravings and elevated your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header