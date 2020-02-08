import React from "react";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = props => {
  return (
    <div className="item">
      <ItemTitle itemTitle={props.title} />
      <ItemSubtitle itemSubtitle={props.subtitle} />
      <ItemPicture />
      <ItemDescription ItemDescription={props.description} />
    </div>
  );
};

export default Item;
