import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Components/Common'

const LatestStories = () => {
  let [count] = useContext(store)
  return (
    <div>
       <div>
      <div><Header headertext={"Latest Stories"}/></div>
      <div>
            <div style={{display:"flex", gap:"15px", justifyContent:"center"}}>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div>
                          <div>
                
                          {/* <img src={d.img} alt="" height={"150"}/> */}
                          <h2>Catch wave with <br /> an adventure guide</h2> <hr />
                          <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. <br /> Aspernatur voluptate eos porro <br /> eius cupiditate est dolores voluptatibus <br /> odit doloremque dolorum expedita<br /> Distinctio, consequatur?</p>
                          <p>{d.para}</p>
                          
                          </div>
          
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </div>
  )
}

export default LatestStories
