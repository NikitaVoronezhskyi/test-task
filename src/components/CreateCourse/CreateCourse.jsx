import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import "./CreateCourse.css";
import mockedAuthorsList from "../../mockedAuthorsList";
import timeConvert from "../../helper/TimeConverter";

const CreateCourse = () => {
  return (
    <div className="createcourse container">
      <div className="createcourse-top">
        <div className="createcourse-top-heading">
          <Input placeholderText="Enter Title" labelText={"Title"} />
          <Button text="Create Course" />
        </div>
        <label className="textarea-wrapper" htmlFor="">
        Description
        <textarea className="createcourse-top-area" name="description" placeholder="Enter descroption"></textarea>
        </label>
      </div>
      <div className="createcourse-bottom">
        <div className="createcourse-bottom-left">
          <div className="createcourse-bottom-left-author">
            <h3 className="createcourse-heading">Add Author</h3>
            <Input placeholderText="Enter author name" labelText={"Author name"} />
            <Button text="Create Author" />
          </div>
          <div className="createcourse-bottom-left-duration">
            <h3 className="createcourse-heading">Duration</h3>
            <Input placeholderText="Enter Duration" labelText={"Duration"} />
            <p className="createcourse-text" >Duration: <span>{timeConvert(93)}</span> hours</p>
          </div>
        </div>
        <div className="createcourse-bottom-right">
          <div className="createcourse-bottom-right-allauthors">
          <h3 className="createcourse-heading">Authors</h3>
            <ul className="createcourse-bottom-right-list">
            {mockedAuthorsList.map((author)=>{
              return <li key={author.id} className="createcourse-bottom-right-list-item">{author.name} <Button text="Add Author"/></li>
            })}
            </ul>
          </div>
            <div className="createcourse-bottom-right-currentauthors">
            <h3 className="createcourse-heading">Course Authors</h3>
            <ul className="createcourse-bottom-right-currentlist">
            <li>David David</li>
          </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
