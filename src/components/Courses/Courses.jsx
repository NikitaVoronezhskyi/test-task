import React from "react";
import Button from "../../common/Button";
import SearchBar from "./SearchBar/SearchBar";
import mockedCoursesList from "../../mockedCoursesList";
import mockedAuthorsList from "../../mockedAuthorsList";
import "./Courses.css";
import CourseCard from "./CourseCard/CourseCard";
import timeConvert from "../../helper/TimeConverter";

const Courses = () => {
  function getAuthors(requiredAuthors,authorsArray){
    authorsArray.filter((exsistingAuthor)=>{
      
    })
    }

      


  return (
    <main>
      <div className="container main">
        <div className="main-top">
          <SearchBar />
          <Button text="Add New Course" />
        </div>
        {mockedCoursesList.map((course) => {
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
    </main>
  );
};

export default Courses;
