
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Controller } from "swiper";

import { ContinentItems } from '../../constants/values'
import { CarouselItem } from './CarouselItem';

import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/controller";

export function Carousel() {
  return (
    <Swiper pagination={true} navigation modules={[Pagination, Navigation, Controller]}>
      {ContinentItems.map((continent, index) => (
        <SwiperSlide key={index}>
          <CarouselItem
            continent={continent.continent}
            href={continent.href}
            src={continent.src}
            text={continent.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}