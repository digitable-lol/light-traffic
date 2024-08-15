import React, { useState } from "react";
import Header from "../../components/Header/Header.tsx";
import HomeButton from "../../components/HomeButton/HomeButton.tsx";
import settings from "../../assets/settings.svg";
import CreateProjectButton from "../../components/CreateProjectButton/CreateProjectButton.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import "./styles.css";

const ProjectPage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleCreateProjectClick = () => {
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

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
          <CreateProjectButton onClick={handleCreateProjectClick} />
        </div>
        <SearchBar />
        <div className="main-project">
          <ProjectCard />
        </div>
      </div>

      {isPanelOpen && (
        <>
          <div className="overlay" onClick={handleClosePanel}></div>
          <div className="project-panel">
            <h2>Создать проект</h2>
            <label htmlFor="project-name">Название проекта</label>
            <input
              id="project-name"
              type="text"
              placeholder="Название проекта"
            />

            <label htmlFor="project-description">Описание проекта</label>
            <textarea
              id="project-description"
              placeholder="Описание проекта"
            ></textarea>

            <label htmlFor="planned-start-date">Планируемая дата начала</label>
            <input
              id="planned-start-date"
              type="date"
              placeholder="Планируемая дата начала"
            />

            <label htmlFor="actual-start-date">Актуальная дата начала</label>
            <input
              id="actual-start-date"
              type="date"
              placeholder="Актуальная дата начала"
            />

            <div className="panel-buttons">
              <button className="create-button">Создать</button>
              <button className="cancel-button" onClick={handleClosePanel}>
                Отменить
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
