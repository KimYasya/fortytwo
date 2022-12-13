import React from "react";
import {Link} from "react-router-dom";
import "./Project.css";

export default function Project(props) {

  const { projectName, projectAbout, link, linkText } = props;

  return (
    <div className="project__choise">
      <div className="project__info">
        <h3 className="project__header">{projectName}</h3>
        <div className="project__text">
        <p>{projectAbout}</p>
        <Link className="linkBtn" to={link}>{linkText}</Link>
        </div>
      </div>
    </div>
  )
}