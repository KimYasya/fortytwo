import React from "react";
import "./Project.css";

export default function Project(props) {

  const { projectName, projectAbout, link, linkText, target, rel } = props;

  return (
    <div className="project__choise">
      <div className="project__info">
        <h3 className="project__header">{projectName}</h3>
        <div className="project__text">
        <p>{projectAbout}</p>
        <a className="linkBtn" href={link} target={target} rel={rel}>{linkText}</a>
        </div>
      </div>
    </div>
  )
}