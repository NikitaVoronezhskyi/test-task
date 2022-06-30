import Button from '../../common/Button';
import Input from '../../common/Input';
import './CreateCourse.css';
import mockedAuthorsList from '../../mockedAuthorsList';
import pipeDuration from '../../helpers/pipeDuration';
import { useState } from 'react';
const CreateCourse = ({ activeForm, setCoursesList }) => {
  const [authorArray, setAuthorArray] = useState(mockedAuthorsList);
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [duration, setDuration] = useState(0);
  function newAuthor(event) {
    event.preventDefault();
    const newAuthor = {
      id: Date.now(),
      name: event.target.newAuthorName.value.trim(),
    };
    setAuthorArray((prev) => [...prev, newAuthor]);
    event.target.reset();
  }

  function createCourse(e) {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      authors: courseAuthors.map((author) => author.id),
      creationDate: new Date().toJSON(),
      duration,
      title: e.target.title.value.trim(),
      description: e.target.description.value.trim(),
    };
    setCoursesList((prev) => [...prev, newCourse]);
    activeForm(false);
  }

  function changeTime(e) {
    setDuration(Number(e.target.value));
  }

  function addAuthorToCourse(currentAuthor) {
    setCourseAuthors((prev) => [...prev, currentAuthor]);
    setAuthorArray(
      authorArray.filter((author) => author.id !== currentAuthor.id)
    );
  }

  function removeAuthorFromCourse(currentAuthor) {
    setAuthorArray((prev) => [...prev, currentAuthor]);
    setCourseAuthors(
      courseAuthors.filter((author) => author.id !== currentAuthor.id)
    );
  }

  return (
    <div className="createcourse container">
      <form className="createcourse-top" onSubmit={createCourse}>
        <div className="createcourse-top-heading">
          <Input
            name="title"
            placeholderText="Enter Title"
            labelText={'Title'}
            required="required"
          />
          <Button type="submit" buttonText="Create Course" />
        </div>
        <label className="textarea-wrapper">
          Description
          <textarea
            className="createcourse-top-area"
            name="description"
            placeholder="Enter description"
            required
          ></textarea>
        </label>
      </form>
      <div className="createcourse-bottom">
        <div className="createcourse-bottom-left">
          <form
            className="createcourse-bottom-left-author"
            onSubmit={newAuthor}
          >
            <h3 className="createcourse-heading">Add Author</h3>
            <Input
              name="newAuthorName"
              placeholderText="Enter author name"
              labelText="Author name"
            />
            <Button type="submit" buttonText="Create Author" />
          </form>
          <div className="createcourse-bottom-left-duration">
            <h3 className="createcourse-heading">Duration</h3>
            <Input
              name="Duration"
              placeholderText="Enter Duration"
              labelText={'Duration'}
              required="required"
              type="number"
              value={duration}
              onChange={changeTime}
            />
            <p className="createcourse-text">
              Duration: <span>{pipeDuration(duration)}</span> hours
            </p>
          </div>
        </div>
        <div className="createcourse-bottom-right">
          <div className="createcourse-bottom-right-allauthors">
            <h3 className="createcourse-heading">Authors</h3>
            <ul className="createcourse-bottom-right-list">
              {authorArray.map((author) => {
                return (
                  <li
                    key={author.id}
                    className="createcourse-bottom-right-list-item"
                  >
                    {author.name}{' '}
                    <Button
                      onClick={() => addAuthorToCourse(author)}
                      buttonText="Add Author"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="createcourse-bottom-right-currentauthors">
            <h3 className="createcourse-heading">Course Authors</h3>
            <ul className="createcourse-bottom-right-currentlist">
              {courseAuthors.map((author) => {
                return (
                  <li
                    key={author.id}
                    className="createcourse-bottom-right-list-item"
                  >
                    {author.name}{' '}
                    <Button
                      onClick={() => removeAuthorFromCourse(author)}
                      buttonText="Delete Author"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
