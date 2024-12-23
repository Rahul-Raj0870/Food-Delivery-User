import React, { useContext } from 'react'
import './Navbar.css'
import profile from '../assets/images/user.png'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
const Navbar = ({setShowLogin}) => {
  const {getTotalAmount,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")

  }
  
  return (
    <div className='Navbar'>
      <Link className='text-decoration-none' to={'/'}><img className='logo' src={logo} alt="" /></Link>
      <ul className='navbar-menu '>
        <Link to={'/'} className='Links'>Home</Link>
        <a href='#explore-menu' className='Links'>Menu</a>
        <a href='#food-disp' className='Links'>Dishes</a>
        <a href='#footer' className='Links'>Contact-us</a>
      </ul>
      <div className='navbar-right d-flex align-items-center gap-4'>
      <Link className='text-decoration-none text-light'><i style={{fontSize:'1.5rem',cursor:'pointer'}} className="fa-solid fa-magnifying-glass"></i></Link>
        <div className="navbar-search-icon position-relative">
        <Link to={'/cart'} className='text-decoration-none text-light'><i style={{fontSize:'1.5rem',cursor:'pointer'}} className="fa-solid fa-basket-shopping"></i></Link>
          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        {!token
        ?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='nav-profile'>
          <img src={profile} alt="" />
          <ul className='profile-drop'>
            <li onClick={()=>navigate("/myorders")}><button style={{marginLeft:'-30px',marginBottom:'0px',border:"none",background:"transparent",color:'tomato'}} className=' py-1 px-2'><i className="fa-brands fa-dropbox"></i></button><p style={{margin:'0px'}}>Orders</p></li>
            <hr style={{margin:'0px 0px 0px -30px'}} />
            <li onClick={logout}><button style={{marginLeft:'-30px',marginBottom:'0px',border:"none",background:"transparent",color:'tomato'}} className=' py-1 px-2'><i className="fa-solid fa-arrow-right-from-bracket"></i></button><p style={{margin:'0px'}}>Logout</p></li>
          </ul>
        </div>

      }
      </div>
    </div>
  )
}

export default Navbar