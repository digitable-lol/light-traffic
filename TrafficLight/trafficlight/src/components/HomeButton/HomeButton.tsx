import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";

import "./styles.css";

const Header = () => {
  return (
    <div className="home-button">
      <img src={home} alt="home" width="16" height="16" />
      <p>Список проектов</p>
    </div>
  );
};

export default Header;
