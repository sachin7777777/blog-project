import React,{useContext} from 'react'
import { Header } from '../../Components/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Technology.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CeAbNkKdD5QW7qFx4xr26c_ePQNvknAPsA&usqp=CAU" alt="" height={"270px"} style={{borderRadius:"10px"}}/>
        <h4>images in my mind too: a strapping man he is mine<br /> Lorem ipsum dolor sit amet.</h4>
      </div>
      <div>
                {count.filter((item) => item.cat === 'technologytop').map((d, index) => {
                    return (
                        <div style={{display:"flex",flexWrap:"wrap", gap:"15px", marginTop:"25px"}}>
                          <div>
                            <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link>
                          </div>
                          <div>
                          <h5>He launched his own clothing<br /> consectetur adipisicing elit.</h5>
                          
                          </div>
                      
                        </div>
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    
  )
}

export default TopPost
