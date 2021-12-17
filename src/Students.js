import React, { useState, useEffect } from "react";
import Student from "./Student";
import Search from "./Search";
import "./Students.css";

const STUDENTS_URL = "https://api.hatchways.io/assessment/students";

export default function Students() {
  const [studentsData, setStudentsData] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    fetch(STUDENTS_URL)
      .then((response) => response.json())
      .then((res) => {
        setStudentsData(
          res.students.map((studentData) => ({ ...studentData, tags: [] }))
        );
      });
  }, []);

  const getFullName = (data) =>
    (data.firstName + " " + data.lastName).toLowerCase();

  const cleanUp = (arr) => [...new Set(arr)].sort();

  const addTag = (tag, id) => {
    setStudentsData(
      studentsData.map((studentData) =>
        studentData.id === id
          ? {
              ...studentData,
              tags: cleanUp([...studentData.tags, tag]),
            }
          : studentData
      )
    );
  };

  return (
    <div className="Students">
      <div className="Students-search-group">
        <Search type="name" setFilter={setNameFilter} />
        <Search type="tag" setFilter={setTagFilter} />
      </div>
      <div className="Students-list">
        {studentsData &&
          studentsData
            .filter(
              (studentData) =>
                getFullName(studentData).includes(nameFilter) &&
                (tagFilter === "" ||
                  studentData.tags.some((tag) => tag.includes(tagFilter)))
            )
            .map((data) => (
              <Student key={data.id} data={data} addTag={addTag} />
            ))}
      </div>
    </div>
  );
}
