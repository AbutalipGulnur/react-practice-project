import React from "react";
import Ketchup from "../../images/33333.png";
import Data from "../data";

const AboutSection = ({data}) => {
  console.log(data,"cvc");
  
    return ( 
        <section class="food-section">
      <div class="food-content">
        <div class="image-container">
          <img src={Ketchup} alt="Ketchup" class="ketchup" />
        </div>
        <div class="text-content">
          <span class="about">About us</span>
          <h2>
          {data?.title} <br />
          {data?.title}
          </h2>
          <p>
            {data?.discription}.
          </p>
          <button class="explore-btn">{data?.btn}</button>
        </div>
      </div>
    </section>
     );
    };
    
    export default AboutSection;