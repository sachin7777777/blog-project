import React, { useContext } from 'react'
import { Header } from '../../Components/Common'
import "./Food.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Food"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'food').map((d, index) => {
                    return (
                          <Link to={`/dynamic/${d.id}`} state={d}>
                        <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                          <div>
                          <img src={d.img} alt="" className='img2'/>
                          </div>
                          <div>
                          <h4 className='line1'>he recommended daily caloric<br /> consectetur adipisicing elit.</h4>
                          <p className='line1'>boys needing the most. For<br /> consectetur adipisicing elit.</p>
                          </div>
                      
                        </div>
                          </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ArticlesList
