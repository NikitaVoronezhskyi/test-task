import Button from '../../common/Button';
import SearchBar from './SearchBar/SearchBar';
import './Courses.css';
import CourseCard from './CourseCard/CourseCard';
import { useNavigate } from 'react-router-dom';

const Courses = ({ coursesList,setCoursesList,authorList }) => {
  const navigate = useNavigate()
  function changeFormState() {
    navigate('/courses/add')
  }
  return (
    <div className="container main">
      <div className="main-top">
        <SearchBar coursesList={coursesList} setCoursesList={setCoursesList} />
        <Button onClick={changeFormState} buttonText="Add New Course" />
      </div>
      <div>
        {coursesList.map((course) => {
          return <CourseCard authorList={authorList} course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
