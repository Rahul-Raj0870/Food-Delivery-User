import React from 'react'
import './Explore.css'
import { menu_list } from '../assets/menu/menu'

const Explore = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu d-flex flex-column gap-4' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='menu-text'>Choose from a diverse menu featuring a detectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div style={{margin:'20px 0px', overflowX:'scroll'}} className='menu-list d-flex justify-content-between aling-items-center text-center gap-5'>
            {menu_list.map((item,index)=>(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='list-item'>
                    <img className={`item-img ${category === item.menu_name ? "active" :""}`}  src={item.menu_image} alt="" />
                    <p style={{cursor:'pointer',marginTop:'10px',fontSize:'1.3rem'}}>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr />
    </div>
  )
}

export default Explore