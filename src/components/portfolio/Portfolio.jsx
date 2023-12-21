import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = (props) => {
  const [items, setItems] = useState(Menu);
  const filterItem = (id) => {
    const updatedItems = Menu.filter((e) => {
      return e.id === id;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work__item" onClick={() => filterItem(1)}>
          Chrome Extension
        </span>
        <span className="work__item" onClick={() => filterItem(2)}>
          Desktop Application
        </span>
        {/* <span className="work__item" onClick={() => filterItem("3")}>
          Something
        </span>
        <span className="work__item" onClick={() => filterItem("4")}>
          Here
        </span> */}
      </div>

      <div className="work__container grid">
        {items.map((e) => {
          const { id, image, title, category, link } = e;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a className="work__button" href={link} target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
