import React from "react";
import ItemTitle from "./ItemTitle";
import ItemPictureSide from "./ItemPictureSide";
import ItemDescription from "./ItemDescription";

const AboutMe = props => {
  return (
    <div className="about-me">
      <ItemTitle itemTitle={props.title} />
      <ItemPictureSide />
      <ItemDescription ItemDescription={props.description} />
    </div>
  );
};

export default AboutMe;
