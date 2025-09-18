import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.jpg';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PromoSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide style={{borderRadius:'15px'}}>
        <img src={Slide1} alt="Slide 1"  style={{borderRadius:'15px'}}/>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'15px'}}>
        <img src={Slide2} alt="Slide 2" style={{borderRadius:'15px'}} />
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'15px'}}>
        <img src={Slide3} alt="Slide 3" style={{borderRadius:'15px'}} />
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'15px'}}>
        <img src={Slide1} alt="Slide 4" style={{borderRadius:'15px'}} />
      </SwiperSlide>
    </Swiper>
  );
}
