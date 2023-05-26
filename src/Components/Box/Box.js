import React, { useContext } from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'

const Box = ({category, image, h, p}) => {
    let [count] = useContext(store)
  return (
    <div>
      {count.filter((item) => item.cat === {category}).map((d, index) => {
                    return (
                        <div>
                            <h1> {h} </h1>
                            <img src={d.img} alt="" />
                        </div>
                    )
                })}
    </div>
  )
}

export default Box
