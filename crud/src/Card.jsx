import React from "react";
import "./Card.css";

const Card = (props) => {
  let item = props.item;
  let dltItem = props.dltItem;
  let updateItem = props.updateItem;
  return (
    <div className="container">
      <div className="info">
        <p>Name: {item.name}</p>
        <p>Age: {item.age}</p>
      </div>
      <button className="dlt" onClick={dltItem}>
        dlt
      </button>
      <button className="update" onClick={updateItem}>
        update
      </button>
    </div>
  );
};

export default Card;
