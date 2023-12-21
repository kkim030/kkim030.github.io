import React from "react";
import "./home.css";
import Me from "../../assets/home_image1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Kelly Kim</h1>
        <span className="home__education">I'm a Computer Science Student</span>
        <HeaderSocials />
        <a
          href="mailto:kellykim0_0@hotmail.com"
          target="_blank"
          className="btn"
        >
          Contact Me!
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
