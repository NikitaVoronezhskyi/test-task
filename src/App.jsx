import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import mockedCoursesList from "./mockedCoursesList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Courses coursesList={coursesList} setCoursesList={setCoursesList} />} />
        <Route path="/create" element={<CreateCourse coursesList={coursesList} setCoursesList={setCoursesList} />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
