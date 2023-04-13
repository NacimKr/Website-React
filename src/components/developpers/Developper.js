import React from 'react'
import "./Developper.css"
import Terminal from "../../assets/terminal.png";

const Developpers = () => {
  return (
    <div className="developper">
      <div className="container-developper">
        <div className="left">
          <h1>Superpowers for DEFI developers.</h1>
          <p>Checkout the <span className="blue">documentation </span>, the <span className="blue">quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
        </div>

        <div className="right">
          <img src={Terminal} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Developpers