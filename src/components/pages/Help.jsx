import React from "react";
import "./Help.css";
import helpData from "../../assets/data/helpData";

function AboutUs() {
  const helpSections = helpData.map((enry, i) => (
    <section
      key={"section-" + i}
      id={enry.title
        .toLowerCase()
        .split(" ")
        .join("-")}
    >
      <h2>{enry.title}</h2>
      {enry.content.map((string, j) => (
        <p key={"paragraph-" + j}>{string}</p>
      ))}
    </section>
  ));
  return (
    <div className="help section-padding">
      <h1>Help</h1>
      {helpSections}
    </div>
  );
}

export default AboutUs;
