import React, { useState } from "react";
import Tags from "./Tags";
import "./Student.css";

export default function Student({ addTag, data }) {
  const { id, pic, firstName, lastName, email, company, skill, grades, tags } =
    data;

  const [showGrades, setShowGrades] = useState(false);

  const getAverage = (nums) => nums.reduce((a, b) => +a + +b) / nums.length;

  return (
    <div className="Student">
      <div className="Student-pic">
        <img src={pic} alt="student-pic" />
      </div>
      <div className="Student-info">
        <div className="Student-header">
          <h1>{firstName + " " + lastName}</h1>
          <button
            className={!showGrades ? "" : "expanded"}
            onClick={() => setShowGrades(!showGrades)}
          ></button>
        </div>
        <div className="Student-body">
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {+getAverage(grades).toFixed(3)}%</p>
        </div>
        <div className="Student-body">
          {showGrades && (
            <div className="Student-grades">
              {grades.map((grade, i) => (
                <p key={i}>
                  Test {i + 1}: <span>{grade}%</span>
                </p>
              ))}
            </div>
          )}
        </div>
        <Tags tags={tags} addTag={addTag} id={id} />
      </div>
    </div>
  );
}
