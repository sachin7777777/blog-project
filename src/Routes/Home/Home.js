import React, { useContext } from "react"
import Banner from "./Banner"
import Latest from "./Latest"
import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
import { store } from "../../Utility/ContextStore/ContextApi"
import { TopNavigation } from "../../Components/Common"


let Home = () =>{
    let [count] = useContext(store)
    console.log(count);
    return(
        <div>
            <TopNavigation/>
            <Banner/>
            <Latest/>
            <LatestArticles/>
            <LatestStories/>
        </div>
    )
}
export default Home

