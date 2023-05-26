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
      <Link to="/">Home</Link>
      <Link to="/bollywood">Bollywood</Link>
      <Link to="/hollywood">Hollywood</Link>
      <Link to="/Technology">Technology</Link>
      <Link to="/fitness">Fitness</Link>
      <Link to="/food">Food</Link>
      </div>
      <div>
        <hr />
      </div>
    </div>
  )
}

export default TopNavigation
