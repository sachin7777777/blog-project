import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Dynamic.style.css"



const Dynamic = () => {
  let loc = useLocation()
  console.log(loc);
  return (
    <div className='container'>
      <div className='logo2'>
      <h1 className='the'>The</h1>
      <h1>Siren</h1>
    </div>
    <hr className='line'/>
    <div className='side'>
      <img src="https://e7.pngegg.com/pngimages/911/287/png-clipart-clapping-applause-computer-icons-applause-text-hand-thumbnail.png" alt="" height={"40px"}/> 96.7k<br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjW9U4VceErj7S76msNUAkXZHBU7EHuFiDg&usqp=CAU" alt="" height={"30px"}/> share this article
    </div>
        <h1 className='heading'>{loc.state.heading}</h1>
        <div className='pic'>
          <img src="https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?w=2000" alt="" height={"80px"} className='cartoon'/>
          <div> 
          <h4>Dmitry Nozhenko</h4>
          <p>Jan 28, 2019, 10 min-read</p>
          {/* <img src="https://templateyou.com/wp-content/uploads/2020/12/Social-Share-Button-1.jpg" alt="" height={"250px"} className='media'/> */}
          </div>
        </div>
        <img src={loc.state.img} alt="" className='img'/>
        {/* <h3>class articles ipsum dolor, <br /> sit amet consectetur adipisicing elit. Blanditiis voluptatibus asperiores <br /> laudantium beatae sapiente sit ipsa <br /> maiores! Veritatis, ad ex! Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Aut labore eaque commodi <br /> consectetur adipisicing elit. Aut labore eaque commodi fggnbnvbn<br /> consectetur adipisicing elit. Aut labore eaque commodi gbhgdhdf <br /> consectetur adipisicing elit. Aut labore eaque commodifdhgng hth <br /> consectetur adipisicing elit. Aut labore eaque commodi ff hgffgjgf<br /> consectetur adipisicing elit. Aut labore eaque commodi fhbgg hn <br /> consectetur adipisicing elit. Aut labore eaque commodi  gghhtfht<br /> consectetur adipisicing elit. Aut labore eaque commodigfgfhfgghhg <br /> consectetur adipisicing elit. Aut labore eaque commodi gthththt</h3> */}
        <p className='para'>{loc.state.para}</p>

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
