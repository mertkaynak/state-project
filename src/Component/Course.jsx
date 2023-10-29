import React from "react";
import Angular from "../images/angular.jpg";
import Bootstrap from "../images/bootstrap5.png";
import CSharp from "../images/ccsharp.png";
import KompleWeb from "../images/kompleweb.jpg";
import "../Course.css";

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  CSharp: CSharp,
  KompleWeb: KompleWeb,
};

const Course = ({ courseName }) => {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
};

export default Course;
