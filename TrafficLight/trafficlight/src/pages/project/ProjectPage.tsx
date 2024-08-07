import React from "react";
import Header from "../../components/Header/Header.tsx";
import HomeButton from "../../components/HomeButton/HomeButton.tsx";
import settings from "../../assets/settings.svg";
import CreateProjectButton from "../../components/CreateProjectButton/CreateProjectButton.tsx";
import "./styles.css";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <HomeButton />
        <div className="menu">
          <div className="menu-right">
            <img src={settings} alt="settings" width="40" height="40" />
            <h2>Список проектов</h2>
          </div>
          <CreateProjectButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
