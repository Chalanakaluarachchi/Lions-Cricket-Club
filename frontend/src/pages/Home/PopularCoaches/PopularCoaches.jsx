import React, {useState, useEffect} from 'react'
import useAxiosFetch from '../../../hooks/useAxiosFetch'

const PopularCoaches = () => {
    const [Coaches, setCoaches] = useState([]);
    const axiosFetch = useAxiosFetch();
    useEffect(()=> {
        axiosFetch.get('/populer-Coaches').then((data) =>{
           setCoaches(data.data) 
        }).catch((err) => {console.log(err)})
    }, []);
    //console.log(Coaches)
  return (
    <div className='md:w-[80%] mx-auto my-36'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'>Best</span> Coaches</h1>
            
        <div className='w-[40%] text-center mx-auto my-4'>
            <p className = 'text-gray-500'>Explore our populer clases . Here is some 
            populer classes based on how many Players Enrolled</p>
        </div>
        </div>
        {
            Coaches ? <>
    <div className='gird mb-28 md:grid-flow-cols-2 lg:grid-cols-4 w-[90%] gap-4 mx-auto'>
    {
        Coaches?.slice(0,4).map((Coaches, i) =>(
            <div key={i} className='flex dark:text-white hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-md px-8 rounded-md'>
                <div className='flex-col flex gap-6 md:gap-8'>
                    <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto"src={Coaches?.Coaches?.photoUrl || `${img}`} alt=""/>
                    <div className='flex flex-col text-center'>
                        <p className='font-medium text-lg dark:text-white text-gray-800'>{Coaches?.Coaches?.name}</p>
                        <p className='text-gray-500 whitespace-nowrap'>Coaches</p>
                        <p className='text-gray-500 whitespace-nowrap'>Total Players:
                        {Coaches?.totalEnrolled}</p>
                    </div>
                    </div>
                    </div>
        ))
    }
    </div>
    </> :<><p>No Coaches Availble</p></>   
        }
        
        </div>
    
  
  )
}

export default PopularCoaches;