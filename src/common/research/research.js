import React from 'react';
import "./style.css"

function Card(props){
    return(
        <a href={props.href}>
        <div className="card" >
          <img src={props.img} />
          <div className="card-body">
            <div className="title"><h1>{props.title}</h1></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            
          </div>
        </div>
        </a>
    )
  }



export default Card;