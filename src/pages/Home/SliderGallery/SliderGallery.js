import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs } from 'swiper/core'

SwiperCore.use([Navigation, Thumbs])

const SliderGallery = React.memo(props => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="showcase__slider">
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="showcase__slider-main"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="showcase__slider-thumbs"
        breakpoints={{
          1440: {
            slidesPerView: 6.8,
            spaceBetween: 37,
          },
          991: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 6.8,
          },
        }}
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
})

export default SliderGallery
