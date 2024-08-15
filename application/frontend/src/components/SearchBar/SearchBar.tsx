import React from "react";
import search from "../../assets/search.svg";
import "./styles.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <button className="search-button">
        <img src={search} alt="search" className="search-icon" />
      </button>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBar;
