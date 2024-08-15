import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/Avatar.svg";
import email from "../../assets/email.svg";
import notifications from "../../assets/notifications.svg";
import aboba from "../../assets/aboba.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="nav">
        <Link to="/231">Home</Link>
        <Link to="/">Project</Link>
      </div>
      <div className="profile">
        <img src={email} alt="email" width="28" height="28" />
        <img src={notifications} alt="notifications" width="28" height="28" />
        <img src={Avatar} alt="avatar" width="28" height="28" />
        <img src={aboba} alt="aboba" width="28" height="28" />
      </div>
    </div>
  );
};

export default Header;
