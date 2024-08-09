import React, { useState } from "react";
import Header from "../../components/Header/Header.tsx";
import "./styles.css";
import HomeButton from "../../components/HomeButton/HomeButton.tsx";
import ProjectButton from "../../components/ProjectButton/ProjectButton.tsx";
import stack from "../../assets/stack.svg";
import CreateReportButton from "../../components/CreateReportButton/CreateReportButton.tsx";
import ReportSearchBar from "../../components/ReportSearchBar/ReportSearchBar.tsx";

const ReportPage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main-nav">
          <HomeButton />
          /
          <ProjectButton />
        </div>
        <div className="menu">
          <div className="menu-right">
            <img src={stack} alt="stack" width="40" height="40" />
            <h2>Список отчетов</h2>
          </div>
          <CreateReportButton />
        </div>
        <div className="main-info">
          <div className="main-info-nav">
            <ReportSearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
