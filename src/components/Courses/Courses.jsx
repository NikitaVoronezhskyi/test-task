import React from "react";
import Button from "../../common/Button";
import SearchBar from "./SearchBar/SearchBar";
import mockedCoursesList from "../../mockedCoursesList";
import mockedAuthorsList from "../../mockedAuthorsList";
import "./Courses.css";
import CourseCard from "./CourseCard/CourseCard";
import timeConvert from "../../helper/TimeConverter";

const Courses = ({activeForm,coursesList,setCoursesList}) => {
  function getAuthors(requiredAuthors,authorsArray){
    const output = authorsArray.filter((author)=> {
      return  requiredAuthors.indexOf(author.id) !== -1;
    });
    const names = output.map(author =>{
      return author.name
    })
    const stringOfNames = names.join(",")
    return stringOfNames
  }

    function changeFormState(currentState) {
      activeForm(true)
    }
     
  return (
      <div className="container main">
        <div className="main-top">
          <SearchBar />
          <Button onClick={changeFormState} text="Add New Course" />
        </div>
        {coursesList.map((course) => {
         return <CourseCard
            title={course.title}
            duration={timeConvert(course.duration)}
            desc={course.description}
            authors={getAuthors(course.authors,mockedAuthorsList)}
            date={course.creationDate}
            key = {course.id}
          />;
        })}
      </div>
  );
};

export default Courses;
