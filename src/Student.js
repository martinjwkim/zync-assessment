import React from "react";
import "./Student.css";

export default function Students({ pic, firstName, lastName }) {
  return (
    <div className="Student">
      <div className="Student-pic">
        <img src={pic} alt="student-pic" />
      </div>
      <div className="Student-info">
        <h1>{firstName + " " + lastName}</h1>
      </div>
    </div>
  );
}
