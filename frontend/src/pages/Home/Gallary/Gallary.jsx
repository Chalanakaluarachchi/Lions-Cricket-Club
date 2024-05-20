import image2 from "../../../assets/gallary/image2.jpg"
import image3 from "../../../assets/gallary/image3.jpg"
import image4 from "../../../assets/gallary/image4.jpg"
import image5 from "../../../assets/gallary/image5.jpg"
import vid1 from "../../../assets/gallary/vid1.mp4"

const Gallary = () => {
  return (
    <div className='container mx-auto my-28'>
      <div className='mb-16'>
      <h1 className="text-5xl font-bold text-center text-secondary">
          Our <span className="text-black dark:text-white">Gallary</span>{" "}
          
        </h1>
      </div>
      
      {/* Video Container */}
      <div className='md:flex items-center justify-center gap-4 mb-8'>
        <div className='w-full md:w-2/3'>
          <video autoPlay muted loop className='w-full'>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div>
          <img src={image2} alt="" className='w-full rounded-sm'/>
        </div>
        <div>
          <img src={image3} alt="" className='w-full rounded-sm'/>
        </div>
        <div>
          <img src={image4} alt="" className='w-full rounded-sm'/>
        </div>
        <div>
          <img src={image5} alt="" className='w-full rounded-sm'/>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
