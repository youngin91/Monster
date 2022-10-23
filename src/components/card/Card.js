import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.img}?set=set2&size=180x180`}
        alt="character"
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}
