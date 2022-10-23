import React from "react";
import "./SearchBox.css"

export default function SearchBox(props) {
  return (
    <div className="search-box">
      <input
        type="search"
        className="search-box__input"
        placeholder="Search For Monsters"
        key={props.key}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
