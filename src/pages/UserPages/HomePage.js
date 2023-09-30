import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './HomePage.css'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {

  return (
    <div>
    <div className='home-main'>
      <div className="home">
        <SearchBar />
      </div>
    </div>
    <footer className='homefooter'>
      <Footer/>
      </footer>
      </div>
  )
}
