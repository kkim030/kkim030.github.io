import React from "react";
import "./about.css";
import Image from "../../assets/about_image2.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p classsName="about__description">
              Hello, I'm Kelly, a third-year Computer Science student at the
              University of British Columbia. I also hold a degree in Finance
              from the Rotman School of Management at the University of Toronto!
              Feel free to contact me!
            </p>
            <a
              href="
                https://publuu.com/flip-book/343087/787752"
              target="_blank"
              className="btn__download"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
