import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Components/Common'
import TopPost from '../Bollywood/TopPost'
import "./Home.style.css"
import { Link } from 'react-router-dom'

const LatestArticles = () => {
  let [count] = useContext(store)
  return (
    <div>
      <div><Header headertext={"Latest Articles"}/></div>
      <div className='latestarticle'>
      <div>
                {count.filter((item) => item.cat === 'latestarticles').map((d, index) => {
                    return (
                        <div>
                          <div style={{display:"flex", flexWrap:"wrap", gap:"15px", marginTop:"35px"}}>
                          
                          <div>
                          <Link to={`/dynamic/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='img5'/>
                            </Link>
                            </div>
                          <div>
                          <h4>hree successful seasons followed <br /> he is only one with government allows state  <br /> Veniam consectetur excepturi  <br /> est sunt qui nulla!</h4>
                          {/* <h4>{d.heading}</h4> */}
                          {/* <p>{d.para}</p> */}
                          </div>
                          
                          </div>

                        </div>
                    )
                })}
                
                <div className='hh'></div>
                
            </div>
            <div><TopPost/></div>
      </div>
    </div>
  )
}

export default LatestArticles
