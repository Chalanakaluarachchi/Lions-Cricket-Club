import image2 from "../../../assets/gallary/image2.jpg";
import image3 from "../../../assets/gallary/image3.jpg";
import image4 from "../../../assets/gallary/image4.jpg";
import image5 from "../../../assets/gallary/image5.jpg";
import vid1 from "../../../assets/gallary/vid1.mp4";

const Gallary = () => {
  return (
    <div className='container mx-auto my-28'>
      <div className='mb-16'>
        <h1 className="text-5xl font-bold text-center text-secondary">
          Our <span className="text-black dark:text-white">Gallery</span>{" "}
        </h1>
      </div>

      {/* Video Container */}
      <div className='md:flex items-center justify-center gap-4 mb-16'>
        <div className='w-full md:w-2/3'>
          <video autoPlay muted loop className='w-full rounded-lg shadow-lg'>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <img src={image2} alt="Gallery Image 2" className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'/>
        </div>
        <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <img src={image3} alt="Gallery Image 3" className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'/>
        </div>
        <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <img src={image4} alt="Gallery Image 4" className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'/>
        </div>
        <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <img src={image5} alt="Gallery Image 5" className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'/>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

