import React from "react";

const Card = (props) => {
  return props.category === "education" ? (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__company">{props.school}</p>
      <p className="timeline__skills">{props.gpa}</p>
    </div>
  ) : (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__company">{props.company}</p>
      <p className="timeline__skills">{props.skills}</p>
    </div>
  );
};

export default Card;
