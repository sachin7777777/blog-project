import React,{useContext} from 'react'
import { Header } from '../../Components/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'
import "./Home.style.css"

const Latest = () => {
  let [count] = useContext(store)
  return (
    <div>
      <div><Header headertext={"The Latest"}/></div>
      <div>
            <div style={{display:"flex", gap:"15px", justifyContent:"center"}}>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div>
                          <div>
                          <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img4'/>
                          </Link>
                
                          <h4>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.  <br /> Veniam consectetur excepturi  <br /> est sunt qui nulla!</h4>
                          {/* <h4>{d.heading}</h4> */}
                          <p>{d.para}</p>
                          
                          </div>
                          
                          
                      
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Latest
