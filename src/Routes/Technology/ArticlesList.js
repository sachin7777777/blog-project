import React, { useContext } from 'react'
import { Header } from '../../Components/Common'
import "./Technology.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Technology"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'technology').map((d, index) => {
                    return (
                          <Link to={`/dynamic/${d.id}`} state={d}>
                        <div className='articlelist'>
                          <div>
                          <img src={d.img} alt="" className='img2'/>
                          </div>
                          <div>
                          <h4 className='line1'>He established himself as an integral<br /> consectetur adipisicing elit.</h4>
                          <p className='line1'>Three successful seasons followed <br /> consectetur adipisicing elit.</p>
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
