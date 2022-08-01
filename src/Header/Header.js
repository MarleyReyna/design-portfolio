import React from "react";
import heroInfo from "./HeroInfo";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <section className="navbar">
        <img src={"/assets/logo.svg"} alt="Design Business Logo" />
        <button className="consultation">Free Consultation</button>
      </section>
      <section className="hero">
        <h1>Design solutions made easy</h1>
        <p>
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs.
        </p>
        <ul>
          {heroInfo.map((item, index) => {
            return (
              <li className={item.class} key={index}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

export default Header;
