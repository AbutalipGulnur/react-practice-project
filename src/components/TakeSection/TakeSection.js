import React from "react";
import phone from "../../images/5555.png";
import salat from "../../images/4.png";
import cola from "../../images/7.png";
import appstore from "../../images/Food 5 1.png";

const TakeSection = ({data}) => {
  console.log(data, "nnn");
    return (
<section class="order-food">
      <div class="images-food">
        <img src={phone} alt="Phones" />
      </div>
      <div class="content-food">
        <h3 class="highlight">{data?.text}</h3>
        <h2>{data?.title}</h2>
        <p>
          {data?.discription}
        </p>
        <div class="app-buttons">
          <a href="https://www.apple.com/app-store/"
            ><img src={appstore} alt="App Store"
          /></a>
        </div>
      </div>
      <img
        class="coca-cola"
        src={cola}
        alt="Decor Left"
      />
      <img
        class="food"
        src={salat}
        alt="Decor Right"
      />
    </section>
     );
    };
    
    export default TakeSection;