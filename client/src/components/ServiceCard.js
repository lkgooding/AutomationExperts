import React from "react";


function serviceCard({id, title, img, text}) {
    return (
   <div className="container"> 
   <div className="wrapper"> 
    <div className="card">
        <h2 className="title"> {title} </h2>
          <img className="serviceImg" src= {img} alt="avatar_img"/>
          <p className="serviceText"> {text} </p>
        </div>
      </div>
      </div>
      );
}

export default serviceCard; 