import React, { useState } from "react";
import "./Tags.css";

export default function Tags({ tags, setTag, id }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue && setTag(inputValue, id);
    setInputValue("");
  };

  return (
    <div className="Tags">
      <div className="Tags-list">
        {tags.map((tag, i) => (
          <div className="Tags-item" key={i}>
            {tag}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={`Add a tag`}
          value={inputValue}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
