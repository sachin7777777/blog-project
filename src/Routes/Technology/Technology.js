import React, { useContext } from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Technology.style.css"
import { TopNavigation } from "../../Components/Common"


let Technology = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <div className="bollywood">
            <ArticlesList/>
            <TopPost/>
       </div>
       </div>
    )
}
export default Technology