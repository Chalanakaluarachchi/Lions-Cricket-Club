import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallary from './Gallary/Gallary'
import PopulerClases from './PopulerClasses/PopulerClases'
import PopularCoaches from './PopularCoaches/PopularCoaches'

const Home = () => {
  console.log(import.meta.env.VITE_APIKEY)
  return (
    <div>
      <HeroContainer/>
      <div className='max-w-screen-x1 mx-auto'>
      <Gallary/>
      <PopulerClases/> 
      <PopularCoaches/>
      </div>
    </div>
  )
}

export default Home