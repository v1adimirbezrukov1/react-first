import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = React.memo(props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const burgerRef = useRef()

  return (
    <div className={`header ${isMenuOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="header__items">
          <div className="header__start">
            <Link to="/" className="header__logo">
              <img src="assets/images/logo.svg" />
            </Link>
            <div
              className="header__burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              ref={burgerRef}
            >
              <span></span>
            </div>
          </div>
          <div className="header__item">
            <ul className="header__nav">
              <li>
                <Link to="/about">О компании</Link>
              </li>
              <li>
                <Link to="/projects" className="active">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
            <a href="tel:+7 (499) 999-99-99" className="header__btn">
              +7 (499) 999-99-99
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header
