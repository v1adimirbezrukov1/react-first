import React from 'react'
import './Footer.scss'

const Footer = React.memo(props => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__item">
            <div className="footer__image">
              <img src="assets/images/footer-img.png" />
            </div>
            <div className="footer__blocks">
              <div className="footer__block">
                <div className="footer__head">Площадь</div>
                <div className="footer__value">
                  73.01 м<sup>2</sup>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__head">Этаж</div>
                <div className="footer__value">1/1</div>
              </div>
              <div className="footer__block">
                <div className="footer__head">
                  Ставка м<sup>2</sup>/год
                </div>
                <div className="footer__value">56 099 ₽</div>
              </div>
              <div className="footer__block">
                <div className="footer__head">Стоимость</div>
                <div className="footer__value">120 000 ₽/мес</div>
              </div>
            </div>
          </div>
          <div className="footer__end">
            <div className="footer__name">Филлипов Христафор Константинович</div>
            <a href="+7 (499) 111-22-33" className="footer__btn">
              +7 (499) 111-22-33
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
