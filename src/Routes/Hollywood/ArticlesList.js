import React, { useContext } from 'react'
import { Header } from '../../Components/Common'
import "./Hollywood.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Hollywood"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'hollywood').map((d, index) => {
                    return (
                          <Link to={`/dynamic/${d.id}`} state={d}>
                        <div className='articlelist'>
                          <div>
                          <img src={d.img} alt="" className='img2'/>
                          </div>
                          <div>
                          <h4 className='line1'>Hollywood was laid out as a real-estate <br /> from Kansas who envisioned</h4>
                          <p className='line1'>adobe building 1853 on a site<br /> prohibitionist from Kansas who envisioned</p>
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
