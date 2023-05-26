import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Dynamic.style.css"


const Dynamic = () => {
  let loc = useLocation()
  console.log(loc);
  return (
    <div className='container'>
        <h1>{loc.state.heading}</h1>
        <div className=''></div>
        <img src={loc.state.img} alt="" className='img'/>
        <h3>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Blanditiis voluptatibus asperiores <br /> laudantium beatae sapiente sit ipsa <br /> maiores! Veritatis, ad ex! Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Aut labore eaque commodi <br /> consectetur adipisicing elit. Aut labore eaque commodi fggnbnvbn<br /> consectetur adipisicing elit. Aut labore eaque commodi gbhgdhdf <br /> consectetur adipisicing elit. Aut labore eaque commodifdhgng hth <br /> consectetur adipisicing elit. Aut labore eaque commodi ff hgffgjgf<br /> consectetur adipisicing elit. Aut labore eaque commodi fhbgg hn <br /> consectetur adipisicing elit. Aut labore eaque commodi  gghhtfht<br /> consectetur adipisicing elit. Aut labore eaque commodigfgfhfgghhg <br /> consectetur adipisicing elit. Aut labore eaque commodi gthththt</h3>
        <div>
          {/* {
            loc.map((item) => {
              return(
                <div key={item.id}>
                  <div>{item.state.title}</div>
                </div>
              )
            })
          } */}

        </div>
    </div>
  )
}

export default Dynamic
