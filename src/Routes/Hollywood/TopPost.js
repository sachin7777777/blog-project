import React,{useContext} from 'react'
import { Header } from '../../Components/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Hollywood.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
        <img src="https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/03/02/Pictures/_f5b87d32-5c86-11ea-ab89-cb4d4e6220f6.jpg" alt="" height={"270px"} style={{borderRadius:"10px"}}/>
        <h4>images in my mind too: a strapping man he is mine<br /> Lorem ipsum dolor sit amet.</h4>
      </div>
      <div>
                {count.filter((item) => item.cat === 'hollywoodtop').map((d, index) => {
                    return (
                        <div style={{display:"flex",flexWrap:"wrap", gap:"15px", marginTop:"25px"}}>
                          <div>
                            <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link>
                          </div>
                          <div>
                          <h5>passive poses for longer without<br /> consectetur adipisicing elit.</h5>
                          
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
