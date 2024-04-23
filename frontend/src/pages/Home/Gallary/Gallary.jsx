import React from 'react'

import image2 from "../../../assets/gallary/image2.jpg"
import image3 from "../../../assets/gallary/image3.jpg"
import image4 from "../../../assets/gallary/image4.jpg"
import image5 from "../../../assets/gallary/image5.jpeg"

const  Gallary = () => {
  return (
    <div className='md:w-[80%] mx-auto my-28'>
    <div className='mb-16'>
        <h1 className="text-5xl font-bold text-center">Our Gallary</h1>
        </div>
        {/*image container*/}
        <div className='md:grid grid-cols-2 items-center justify-center border gap-4'>
            <div className='mb-4 md:mb-0'>
                <img src={image4} alt="" className='md:h-[720px] w-full mx-auto rounded-sm'/>
            </div>
        
        <div className='gap-4 grid grid-cols-2 items-start'>
            <div className='mb-4 md:mb-0'>
                <img src={image2} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div className='mb-4 md:mb-0'>
                <img src={image3} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div className='mb-4 md:mb-0'>
                <img src={image3} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div className='mb-4 md:mb-0'>
                <img src={image5} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
        </div>
        </div>
        </div>
  )
}

export default  Gallary