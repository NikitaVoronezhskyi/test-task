import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import mockedCoursesList from './mockedCoursesList';
import { useState } from 'react';

function App() {
  const [activeForm, setactiveForm] = useState(false)
  const [coursesList, setCoursesList] = useState(mockedCoursesList)
  return (
    <div className="App">
    <Header/>
    <main>
    {!activeForm &&<Courses coursesList={coursesList} setCoursesList={setCoursesList}  activeForm={setactiveForm}/> }
    {activeForm && <CreateCourse setCoursesList={setCoursesList} coursesList={coursesList} activeForm={setactiveForm}/>}
    </main>
    </div>
  );
}

export default App;
