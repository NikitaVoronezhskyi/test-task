import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button';
import dateGenerator from '../../../helpers/dateGenerator';
import pipeDuration from '../../../helpers/pipeDuration';
import mockedAuthorsList from '../../../mockedAuthorsList';
import './CourseCard.css';

const CourseCard = ({ course,authorList }) => {
  const navigate = useNavigate()
  function showCourseCard() {
    navigate(`/courses/${course.id}`);
  }
  const authorNames = course.authors.map((authorId) =>mockedAuthorsList.find((author) => author.id === authorId)?.name).join(', ');
  return (
    <article className="course">
      <div className="course-left">
        <h3 className="course-left-title">{course.title}</h3>
        <p className="course-left-text">{course.description}</p>
      </div>
      <div className="course-right">
        <div className="course-right-block">
          <p className="course-right-block-authors">Authors:{authorNames}</p>
          <p>Duration:{pipeDuration(course.duration)} hours</p>
          <p>Created:{dateGenerator(course.creationDate)}</p>
        </div>
        <Button onClick={showCourseCard} buttonText="Show Course" />
      </div>
    </article>
  );
};

export default CourseCard;
