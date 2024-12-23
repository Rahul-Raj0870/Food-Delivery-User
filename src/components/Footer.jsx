import React from 'react'
import './Footer.css'
import logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <div style={{backgroundColor:'#001f3f'}} className='footer d-flex flex-column align-items-center mt-5 p-5 text-light gap-3' id='footer'>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr'}} className='footer-cont w-100 md-gap-5'>
        <div className='footer-cont-lft d-flex flex-column align-items-start gap-2'>
            {/* <h1>TOMATO</h1> */}
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat numquam possimus reiciendis minus fugit impedit doloribus hic saepe explicabo, earum architecto porro unde omnis animi, sed error pariatur nesciunt.</p>
            <div className='social-icons fs-3'>
                <i className="fa-brands fa-facebook border rounded-circle md-p-2"></i>
                <i className="fa-brands fa-twitter border rounded-circle md-p-2 md-mx-3"></i>
                <i className="fa-brands fa-linkedin-in border rounded-circle md-p-2"></i>
            </div>
        </div>
        <div  className='footer-cont-cnt d-flex flex-column align-items-start gap-2 '>
            <h2>COMPANY</h2>
            <ul style={{listStyle:'none',paddingLeft:'0px',cursor:'pointer'}}>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-cont-rgt d-flex flex-column align-items-start gap-2'>
            <h2>GET IN TOUCH</h2>
            <ul style={{listStyle:'none',paddingLeft:'0px',cursor:'pointer'}}>
                <li>+1-212-234-4568</li>
                <li>contact@gourmetgo.com</li>
            </ul>
        </div>
        </div>
        <hr/>
        <p className='copyright'>Copyright 2024 <span><i className="fa-regular fa-copyright"></i></span> Gormet-Go.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer