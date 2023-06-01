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
            <div style={{display:"flex",flexWrap:"wrap", gap:"15px", justifyContent:"center"}}>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div>
                          <div>
                
                          {/* <img src={d.img} alt="" height={"150"}/> */}
                          <h2>Catch wave with <br /> an adventure guide</h2> <hr />
                          <p>he Indian film industry entere<br />Stay informed about the latest technological<br /> Aspernatur voluptate eos porro <br /> eius cupiditate est dolores voluptatibus <br /> odit doloremque dolorum expedita<br /> passive poses for longer without</p>
                          {/* <p>{d.para}</p> */}
                          
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
