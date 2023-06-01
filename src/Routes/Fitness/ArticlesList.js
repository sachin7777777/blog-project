import React, { useContext } from 'react'
import { Header } from '../../Components/Common'
import "./Fitness.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Fitness"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'fitness').map((d, index) => {
                    return (
                          <Link to={`/dynamic/${d.id}`} state={d}>
                        <div className='articlelist'>
                          <div>
                          <img src={d.img} alt="" className='img2'/>
                          </div>
                          <div>
                          <h4 className='line1'>Los Angeles, then a small city<br /> consectetur adipisicing elit.</h4>
                          <p className='line1'>from Kansas who envisioned a<br /> consectetur adipisicing elit.</p>
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
