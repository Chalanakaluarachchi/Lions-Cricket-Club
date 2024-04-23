import React from 'react'
import bgImg from "../../../assets/home/banner-2.jpg"

const Hero2 = () => {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
    <div className='min-h-screen flex justify-start p1-11 items-center text-white bg-black bg-opacity-60'>
        <div>
          
           
            <div className='space-y-6 space-x-8'> 
              <p className='md:text-4xl text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We provide</p>
              <h1 className='md:text-7xl text-4xl font-bold space-x-9'>Best Cricket Club In <br/>Sri Lanka</h1>
              <div className='md:w-1/2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat aspernatur in aliquid et cupiditate ad nisi doloremque beatae 
                  itaque. Hic quas voluptatum fugiat expedita exercitationem autem molestiae iusto adipisci.</p>
              </div>
              <div className='flex flex-warp item-center gap-5'>
                <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Now</button>
                <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View Event</button>
              </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Hero2