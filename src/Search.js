import React from "react";
import "./Search.css";

export default function Search({ type, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div className="Search">
      <input placeholder={`Search by ${type}`} onChange={handleChange}></input>
    </div>
  );
}
