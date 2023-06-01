import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Common'
import  "./TopNavigation.style.css"

const TopNavigation = () => {
  return (
    <div>
        <div>
            <Logo/>
        </div>
      <div className='nav'>
      <Link to="/" className='text'>Home</Link>
      <Link to="/bollywood" className='text'>Bollywood</Link>
      <Link to="/hollywood" className='text'>Hollywood</Link>
      <Link to="/Technology" className='text'>Technology</Link>
      <Link to="/fitness" className='text'>Fitness</Link>
      <Link to="/food" className='text'>Food</Link>
      </div>
      <div>
        {/* <hr /> */}
      </div>
    </div>
  )
}

export default TopNavigation
