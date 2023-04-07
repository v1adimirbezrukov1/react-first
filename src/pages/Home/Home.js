import React from 'react'
import { Link } from 'react-router-dom'
import Laoyut from '../../components/Layout/Layout'
import './Home.scss'
import SliderGallery from './SliderGallery/SliderGallery'
import '../../assets/swiper/swiper-bundle.min.css'
import imagesSwiper from './SliderGallery/SliderImages'

const Home = React.memo(props => {
  return (
    <Laoyut>
      <div className="showcase">
        <div className="container">
          <div className="showcase__items">
            <div className="showcase__item">
              <Link to="/" className="showcase__back">
                <img src="assets/images/back.svg" />
                Вернуться назад
              </Link>
              <h1 className="showcase__title">квартира 1</h1>
              <div className="showcase__block">
                <div className="showcase__head">Адрес:</div>
                <div className="showcase__info">
                  ЮВАО, ул. Барыкина, д.5к2 тут будет вторая и третья строка адреса объекта
                </div>
              </div>
            </div>
            <SliderGallery images={imagesSwiper} />
          </div>
        </div>
      </div>
    </Laoyut>
  )
})

export default Home
