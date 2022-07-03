import Button from '../../common/Button';
import SearchBar from './SearchBar/SearchBar';
import './Courses.css';
import CourseCard from './CourseCard/CourseCard';

const Courses = ({ coursesList,setCoursesList }) => {
  function changeFormState() {
  }
  return (
    <div className="container main">
      <div className="main-top">
        <SearchBar coursesList={coursesList} setCoursesList={setCoursesList} />
        <Button onClick={changeFormState} buttonText="Add New Course" />
      </div>
      <div>
        {coursesList.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
