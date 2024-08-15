import React from "react";
import monogram from "../../assets/Monogram.svg";
import arrow_forward from "../../assets/arrow_forward.svg";
import "./styles.css";

const ProjectCard: React.FC = () => {
  return (
    <div className="project-card">
      <div className="project-card-left">
        <img src={monogram} alt="monogram" className="monogram-icon" />
        <p className="project-name">Project name</p>
      </div>
      <img src={arrow_forward} alt="media" className="media-icon" />
    </div>
  );
};

export default ProjectCard;
