import React from "react";
import mouth from "../../images/mouth.png";
import truck from "../../images/truck.png";
import food from "../../images/food.png";
import dish from "../../images/dish.png";
import avocado from "../../images/avocado.png";



const ServicesSection = ({data}) => {
  console.log(data, "services");
  
    return (
    <section class="services">
      <p>Features</p>
      <h2>Our Awesome Services</h2>
      <div class="service-container">
        {data?.map((el) => (
        <div class="service-box">
          <img src={food} alt="Quality Food" />
          <h3>{el?.title}</h3>
          <p>
           {el.discription}
          </p>
        </div> ))}
        {/* <div class="service-box">
          <img src={mouth} alt="Super Taste" />
          <h3>Super Taste</h3>
          <p>
            Delicious flavors that satisfy your taste buds. Experience food like
            never before.
          </p>
        </div> */}
        {/* <div class="service-box">
          <img src={truck} alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
          <p>
            Quick and reliable food delivery service to ensure freshness and
            convenience.
          </p>
        </div> */}
      </div>
      <img
        class="first"
        src={dish}
        alt="Decor Left"
      />
      <img
        class="second"
        src={avocado}
        alt="Decor Right"
      />
    </section>
 );
};

export default ServicesSection;