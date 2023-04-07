import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Laoyut = React.memo(({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  )
})

export default Laoyut
