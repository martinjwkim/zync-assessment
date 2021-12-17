import React, { useState, useEffect } from "react";
import Student from "./Student";
import Search from "./Search";
import "./Students.css";

const STUDENTS_URL = "https://api.hatchways.io/assessment/students";

export default function Students() {
  const [studentsData, setStudentsData] = useState(null);
  const [filteredStudents, setFilteredStudents] = useState(null);

  useEffect(() => {
    fetch(STUDENTS_URL)
      .then((response) => response.json())
      .then((data) => {
        setStudentsData(data.students);
        console.log(data.students);
      });
  }, []);

  return (
    <div className="Students">
      <div className="Students-search-group">
        <Search type="name" />
        <Search type="tag" />
      </div>
      <div className="Students-list">
        {studentsData &&
          studentsData.map((data) => <Student key={data.id} {...data} />)}
      </div>
    </div>
  );
}
