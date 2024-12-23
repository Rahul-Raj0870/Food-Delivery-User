import React, {  useContext, useState } from 'react'
import'./Login.css'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
const Login = ({setShowLogin}) => {
  const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState("Login")
    const[data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }
    const onLogin = async (event)=>{
      event.preventDefault()
      let newUrl = url
      if(currState === "Login"){
        newUrl += "/api/user/login"
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data)
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }else{
        alert(response.data.message)
      }
    }
    
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='popup-cont'>
            <div className='popup-title'>
                <h2 style={{color:"tomato"}}>{currState}</h2>
               <button className='btn shadow-none bg-transparent' onClick={()=>setShowLogin(false)}> <i className="fa-brands fa-x"></i></button>
            </div>
            <div className='popup-inputs'>
                {currState === "Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} className='form-control border border-dark rounded ps-3' type="text" placeholder='Your name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} className='form-control border border-dark rounded ps-3' type="text" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} className='form-control border border-dark rounded ps-3' type="password" placeholder='Your password' required />
            </div>
            <button type='submit' className='btn btn-primary'>{currState === "Sign Up"?"Create account":"Login"}</button>
            {currState === "Login"
            ?<p>Create a new account? <span style={{cursor:'pointer',color:'tomato'}} onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span style={{cursor:'pointer',color:'tomato'}} onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login