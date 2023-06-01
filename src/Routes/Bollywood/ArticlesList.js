import React, { useContext } from 'react'
import { Header } from '../../Components/Common'
import "./Bollywood.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Bollywood"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'bollywood').map((d, index) => {
                  return (
                      <Link to={`/dynamic/${d.id}`} state={d}>
                        <div className='articlelist'>
                          <div>
                          <img src={d.img} alt="" className='img2'/>
                          </div>
                          <div>
                          <h4 className='line1'>transform our lives. Stay informed <br /> breakthroughs and the ethical and</h4>
                          <p className='line1'>The props help you hold<br /> exerting or tiring out your muscles</p>
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
