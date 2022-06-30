import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import mockedCoursesList from './mockedCoursesList';
import { useState } from 'react';

function App() {
  const [activeForm, setActiveForm] = useState(false);
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  return (
    <div className="App">
      <Header />
      <main>
        {!activeForm && (
          <Courses
            coursesList={coursesList}
            activeForm={setActiveForm}
          />
        )}
        {activeForm && (
          <CreateCourse
            setCoursesList={setCoursesList}
            coursesList={coursesList}
            activeForm={setActiveForm}
          />
        )}
      </main>
    </div>
  );
}

export default App;
