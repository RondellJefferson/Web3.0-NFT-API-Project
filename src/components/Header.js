import React from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="punkLogo" src={punkLogo} alt="Punk img" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search img" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
}

export default Header;
