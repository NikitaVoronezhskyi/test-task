import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import mockedCoursesList from "./mockedCoursesList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import mockedAuthorsList from "./mockedAuthorsList";
function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [authorList, setAuthorList] = useState(mockedAuthorsList);
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/courses" element={<Courses coursesList={coursesList} setCoursesList={setCoursesList} authorList={authorList} />}/>
        <Route path="/courses/:courseId" element={<CourseInfo coursesList={coursesList} authorList={authorList}/>}/>
        <Route path="/courses/add" element={<CreateCourse coursesList={coursesList} setCoursesList={setCoursesList} authorList={authorList} setAuthorList={setAuthorList}  />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
