import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallary from './Gallary/Gallary'
import PopulerClases from './PopulerClasses/PopulerClases'
import PopularCoaches from './PopularCoaches/PopularCoaches'
import Map from './Map/Map';

const Home = () => {
 //const {user} = useAuth();
 //console.log(user)
  //console.log(import.meta.env.VITE_APIKEY)
  return (
    <div>
      <HeroContainer/>
      <div className='max-w-screen-x1 mx-auto'>
      <Gallary/>
      <PopulerClases/> 

      <PopularCoaches/>
      </div>
      <Map/>
    </div>
  )
}

export default Home