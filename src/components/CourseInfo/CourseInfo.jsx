import Button from "../../common/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dateGenerator from "../../helpers/dateGenerator";
import pipeDuration from "../../helpers/pipeDuration";
import "./CourseInfo.css";

const CourseInfo = ({ coursesList, authorList }) => {
  const [course, setCourse] = useState({});
  const navigate = useNavigate();
  const { courseId } = useParams();
  useEffect(() => {
    const ourCourse = coursesList.find((course) => course.id === courseId);
    setCourse(ourCourse);
  }, [courseId, coursesList,authorList]);


  function backToCourses() {
    navigate("/courses");
  }
  return (
    <div className="container courseCard">
      <div className="courseCard-button">
        <Button
          onClick={backToCourses}
          className="courseCard-btn"
          buttonText="< Back to Courses"
        />
      </div>
      <h1 className="courseCard-title">{course.title}</h1>
      <div className="courseCard-block">
        <div className="courseCard-text">
          <p>{course.description}</p>
        </div>
        <ul className="courseCard-block-list">
          <li className="courseCard-block-list-item">
            <dt className="courseCard-block-list-item-title">ID:</dt>
            <dd>{course.id}</dd>
          </li>
          <li className="courseCard-block-list-item">
            <dt className="courseCard-block-list-item-title">Duration:</dt>
            <dd>{pipeDuration(course.duration)} hours</dd>
          </li>
          <li className="courseCard-block-list-item">
            <dt className="courseCard-block-list-item-title">Created:</dt>
            <dd>{dateGenerator(course.creationDate)}</dd>
          </li>
          <li className="courseCard-block-list-item courseCard-block-list-item-authors">
            <dt className="courseCard-block-list-item-title">Authors:</dt>
            <dd className="courseCard-block-list-item-authors-block">
              {course.authors}
            </dd>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseInfo;
