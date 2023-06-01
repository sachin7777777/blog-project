import React from 'react'
import "./Footer.style.css"

const Footer = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", backgroundColor:"gray", color:"white", width:"100%"}}>
      <div>
        <h1>Company Name</h1>
        <hr />
        <h4>the siren</h4>
        <p>Gives you all the latest <br /> news related to bollywood fitness <br /> hollywood technology ets</p>
      </div>
      <div>
        <h1>Products</h1>
        <hr />
        <ul>
            <li>Bollywood</li>
            <li>Hollywood</li>
            <li>Technology</li>
            <li>Fitness</li>
            <li>Food</li>
        </ul>
      </div>
      <div>
        <h1>Address</h1>
        <hr />
        <p>Cyber hub, Gurugram <br />Haraya, India</p>
      </div>
    </div>
  )
}

export default Footer
