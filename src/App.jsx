import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

import Campuss from './Components/Campus/Campuss'
import Tesimonials from './Components/Tesimonials/Tesimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className="container">
     <Title subTitle='Our Program ' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campuss/>
      <Title subTitle='TESTIMONIALS' title='What student Says'/>
     <Tesimonials/>
     <Title subTitle='Contact US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>

    </div>
  )
}

export default App
