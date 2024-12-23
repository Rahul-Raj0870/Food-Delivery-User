import React, { useContext } from 'react'
import './View.css'
import { StoreContext } from '../context/StoreContext'
import FoodItems from './FoodItems'

const View = ({category}) => {
    const {food_list} = useContext(StoreContext)

    
    
  return (
    <div className='food-disp mt-3' id='food-disp'>
        <h2 className='my-3 fw-bolder text-light'>Top dishes near you</h2>
        <div className='disp-list'>
            {food_list.map((item,index)=>{
                if(category==="All" || category === item.category){
                  
                 return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                
                 
                }
            })}

        </div>
    </div>
  )
}

export default View