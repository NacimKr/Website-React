import React from 'react'
import "./About.css"

const AboutCard = (props) => {
  
    console.log(props);

    return (
        <div className="card">
            <div>{props.icon}</div>
            <h2 className="title-card">{props.heading}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default AboutCard