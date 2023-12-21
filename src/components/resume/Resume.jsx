import React from "react";
import "./resume.css";
import Card from "./Card";
import Data from "./Data";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  school={val.school}
                  gpa={val.gpa}
                  category={val.category}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "job") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  company={val.company}
                  skills={val.skills}
                  category={val.category}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
