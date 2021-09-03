import React from "react";
import "./cards.css";
import imageUrl from "./pic.jpg";

const Cards = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <div className="card" key={id}>
        <img src={imageUrl} />
        <div className="card-body">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
