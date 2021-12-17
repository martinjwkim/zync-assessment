import React from "react";
import "./Search.css";

export default function Search({ type }) {
  return (
    <div className="Search">
      <input placeholder={`Search by ${type}`}></input>
    </div>
  );
}
