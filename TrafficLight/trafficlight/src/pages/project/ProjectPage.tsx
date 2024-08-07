import React from "react";
import Header from "../../components/Header/Header.tsx";
import HomeButton from "../../components/HomeButton/HomeButton.tsx";
import settings from "../../assets/settings.svg";
import CreateProjectButton from "../../components/CreateProjectButton/CreateProjectButton.tsx";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeButton />
        <div>
          <img src={settings} alt="settings" width="40" height="40" />
          <h2>Список проектов</h2>
          <CreateProjectButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
