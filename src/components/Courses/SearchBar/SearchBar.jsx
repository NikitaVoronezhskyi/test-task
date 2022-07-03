import Input from '../../../common/Input'
import Button from '../../../common/Button'
import mockedCoursesList from '../../../mockedCoursesList'
import './SearchBar.css'

const SearchBar = ({coursesList,setCoursesList}) => {
  function searchCourse(event){
    event.preventDefault();
    const searchingText = (event.target.search.value).trim().toLowerCase()
    const filteredArray = mockedCoursesList.filter(course => `${course.title} ${course.id}`.toLowerCase().includes(searchingText));
    if (filteredArray.length === 0) {
      alert("No Matching Found")
      setCoursesList(mockedCoursesList)
    } else {
      setCoursesList(filteredArray)
    }
    event.target.reset();
  }
  return (
    <form className='searchbar' onSubmit={searchCourse} >
      <Input type="search" name="search" placeholderText="Enter course name..."/>
      <Button buttonText="Search" size="medium" type="submit"/>
    </form>
  )
}

export default SearchBar

