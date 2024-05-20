import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import the fade effect CSS
import { EffectFade, Autoplay } from 'swiper'; // Import EffectFade
import Hero from './Hero';
import Hero02 from './Hero2';

const HeroContainer = () => {
  return (
    <section>
      <Swiper
        grabCursor={true}
        effect={"fade"} // Use fade effect
        fadeEffect={{ crossFade: true }} // Ensure cross-fade is enabled
        modules={[EffectFade, Autoplay]} // Include the EffectFade module
        className='mySwiper'
        loop={true}
        autoplay={{
          delay: 5000, // Slower transition
          disableOnInteraction: false,
        }}
        speed={1000} // Smooth transition speed
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero02 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroContainer;
