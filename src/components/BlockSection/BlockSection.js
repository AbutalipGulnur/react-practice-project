import React from "react";
import letter from "../../images/letter.jpg";
import banner from "../../images/banner.jpg";
import Mood2 from "../../images/Mood 2.png";


const BlockSection= ({data}) => {
  console.log(data, "5555");
  
    return ( 
    <section class="hero">
        <div class="content">
          <h2>
            Good F<img
              class="img-emoji2"
              src={letter}
              alt="o"
            /><img
              class="img-emoji2"
              src={letter}
              alt="o"
            />d
          </h2>
          <h2>
            Good M<img
              class="img-emoji"
              src={Mood2}
              alt="o"            
         /><img class="img-emoji" src={Mood2} alt="o"  />d
          </h2>
          <p>
           {data?.title}
          </p>
          <button class="menu-button">{data?.btn}</button>
        </div>
        <div class="image-container">
          <img src={banner} alt="Food Image" />
        </div>
      </section>
       );
    };
    
    export default BlockSection;
    