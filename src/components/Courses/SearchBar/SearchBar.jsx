import Input from '../../../common/Input'
import Button from '../../../common/Button'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <form className='searchbar'>
      <Input type="search" name="search" placeholderText="Enter course name..."/>
      <Button buttonText="Search" size="medium" type="submit"/>
    </form>
  )
}

export default SearchBar