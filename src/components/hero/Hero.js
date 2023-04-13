import React from 'react'
import Video from "../../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
        <video autoPlay loop muted src={Video}></video>
        <div className="hero-container">
            <h1 class="title">Decentralized</h1>
            <h1 class="title"><span className="blue">Trading</span> Protocol</h1>
            <p>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
        </div>
        <div className="container-btn">
            <button className="btn" href="">Use Defi</button>
            <button className="btn btn-outline" href="">Documentation</button>
            <button className="btn btn-outline" href="">FAQ</button>
        </div>
        <div className="bottom-text">
            <h2>Total Volume Secured : $42,104,783,662,47</h2>
        </div>
    </div>
  )
}

export default Hero