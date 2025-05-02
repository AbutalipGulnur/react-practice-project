import React from "react";
import food2 from "../../images/Food 2.png";
import food3 from "../../images/Food 3.png";
import food4 from "../../images/Food 11.png";

const PopularSection = ({data}) => {
  console.log(data?.features, "8888888");
  

  return (
    <section class="popular-items">
    <div class="ppular-items-block">
      <h3 class="section-title">Recipes</h3>
      <h2 class="main-title">Most Popular Items</h2>
      <div class="items-grid">
        <div class="item">
          <img src={food4} alt="Flame-boiled dish" />
        </div>
        <div class="item">
          <img src={food2} alt="Peach Melba dish" />
        </div>
        <div class="item">
          <img src={food3} alt="Delmonico Steak dish" />
        </div>
      </div>
      <div>
        <button class="more-recipes">See More Recipes</button>
      </div>
    </div>
  </section>
  );
};

export default PopularSection;
