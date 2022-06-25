import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
  return (
    <div className="App">
    <Header/>
    <Courses/>
    <CreateCourse/>
    </div>
  );
}

export default App;
