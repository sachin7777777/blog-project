import React, { useContext } from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import "./Home.style.css"
import { Link } from 'react-router-dom'

const Banner = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Banner</h1> */}
      {count.filter((item) => item.cat === "homebanner").map((d, index) =>{
                return(
                  <Link to={`/dynamic/${d.id}`} state={d}>
                     <div className='banner'>
                      <div className='one'></div> 
                      <div className='two'>
                          <div className='a'></div>
                          <div className='b'></div>
                      </div>
                    </div>
                  </Link>
                   
                )
            })}
    </div>
  )
}

export default Banner
