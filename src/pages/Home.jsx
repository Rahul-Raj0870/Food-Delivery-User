import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import Explore from '../components/Explore'
import View from '../components/View'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <View category={category}/>
    </div>
  )
}

export default Home