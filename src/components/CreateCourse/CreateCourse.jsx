import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import "./CreateCourse.css";
import mockedAuthorsList from "../../mockedAuthorsList";
import timeConvert from "../../helper/TimeConverter";
import { useState } from "react";
const CreateCourse = ({ activeForm, setCoursesList }) => {
  const [createAuthorName, setcreateAuthorName] = useState("");
  const [authorArray, setAuthorArray] = useState(mockedAuthorsList);
  const [currentCourseAuthors, setcurrentCourseAuthors] = useState([]);
  const [duration, setDuration] = useState(timeConvert("0"))

  function newAuthor() {
    const author = {
      id: Date.now(),
      name: "Here is New Author",
    };
    setAuthorArray((prev) => {
      const newArray = [...prev, author];
      return newArray;
    });
  }

  function createCourse(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCourse = {
      id: Math.ceil(Date.now() * Math.random()),
      authors: currentCourseAuthors.map((author)=>{return author.id}),
      creationDate: new Date().toLocaleDateString(),
    }
    for (const pair of formData) {
      newCourse[pair[0]] = pair[1].trim();
    }
    setCoursesList(prev => {
      return [...prev,newCourse]
    })
    activeForm(false);
  }

  function changeTime(e) {
    const time = timeConvert(e.target.value)
    setDuration(time)
  }

  return (
    <form className="createcourse container">
      <div className="createcourse-top">
        <div className="createcourse-top-heading">
          <Input
            name="Title"
            placeholderText="Enter Title"
            labelText={"Title"}
            required="required"
          />
          <Button onSubmit={createCourse} type="submit" text="Create Course" />
        </div>
        <label className="textarea-wrapper" htmlFor="">
          Description
          <textarea
            className="createcourse-top-area"
            name="description"
            placeholder="Enter descroption"
            required="required"
          ></textarea>
        </label>
      </div>
      <div className="createcourse-bottom">
        <div className="createcourse-bottom-left">
          <div className="createcourse-bottom-left-author">
            <h3 className="createcourse-heading">Add Author</h3>
            <Input
              name="Authors"
              placeholderText="Enter author name"
              labelText={"Author name"}
            />
            <Button onClick={newAuthor} text="Create Author" />
          </div>
          <div className="createcourse-bottom-left-duration">
            <h3 className="createcourse-heading">Duration</h3>
            <Input
              name="Duration"
              placeholderText="Enter Duration"
              labelText={"Duration"}
              required="required"
              type="number"
              onChange={e=>{changeTime(e)}}
            />
            <p className="createcourse-text">
              Duration: <span>{duration}</span> hours
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
                    {author.name}{" "}
                    <Button
                      onClick={() => {
                        const currentAuthor = authorArray.find(
                          (currentAuthor) => author.id === currentAuthor.id
                        );
                        setcurrentCourseAuthors((prev) => {
                          return [...prev, currentAuthor];
                        });
                        setAuthorArray(prev=>{
                          const newArray = authorArray.filter((author)=>{return author.id !== currentAuthor.id})
                          return newArray
                        })
                      }}
                      text="Add Author"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="createcourse-bottom-right-currentauthors">
            <h3 className="createcourse-heading">Course Authors</h3>
            <ul className="createcourse-bottom-right-currentlist">
              {currentCourseAuthors.map((author) => {
                return (
                  <li
                    key={author.id}
                    className="createcourse-bottom-right-list-item"
                  >
                    {author.name}{" "}
                    <Button
                      onClick={() => {
                        const currentAuthor = currentCourseAuthors.find((author)=>{return author.id})
                        setcurrentCourseAuthors(prev =>{
                          const currentAuthorArray = currentCourseAuthors.filter((current)=>{return current.id !== currentAuthor.id})
                          return currentAuthorArray
                        })
                        setAuthorArray(prev=>{
                          return [...prev,currentAuthor]
                        })
                      }}
                      text="Delete Author"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCourse;
