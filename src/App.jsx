import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from 'react';

function App() {
  const [activeForm, setactiveForm] = useState(false)
  return (
    <div className="App">
    <Header/>
    <main>
    {!activeForm &&<Courses activeForm={setactiveForm}/> }
    {activeForm && <CreateCourse activeForm={setactiveForm}/>}
    </main>
    </div>
  );
}

export default App;
