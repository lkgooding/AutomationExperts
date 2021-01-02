import React from "react";
import ServiceCard from '../ServiceCard';
import services from '../ServicesData';

//WORKING ON THIS TO CHANGE THE CSS STYLING. ONCE IT LOOKS HOW I WOULD LIKE, CAN PASTE
//CODE INTO SERVICES.JS PAGE. THE CSS classNames COME FROM SERVICE CARD. 

function renderService({id, title, img, text}) {
  return (
 <ServiceCard
    key = {id}
    title = {title}
    img = {img}
    text = {text}
    /> 
  ); 
}

const ServicesPage = () => {
  return (
  
    <div>
    {services.map(renderService)}
    </div>
    );
};

export default ServicesPage;