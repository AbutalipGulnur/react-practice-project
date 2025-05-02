import React from "react";
import img from "../../images/late.jpg";

const Header = () => {
    
  const toggleMenu = () => {
    document.getElementById("navMenu").classList.toggle("active");
  };

  return (
    <header>
      <div class="logo">f.palace</div>
      <div class="img">
        <img src={img} alt="" />
      </div>
      <div class="header-icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-bars menu-icon" onClick={toggleMenu}></i>
      </div>
      <nav class="nav-menu" id="navMenu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
