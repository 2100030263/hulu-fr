import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Headers({ onCategoryClick, onSearch, setSearchTerm }) {
  const [activeIcon, setActiveIcon] = useState("home"); // Tracks the active icon
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Tracks if search bar is visible

  const handleIconClick = (category) => {
    setActiveIcon(category); // Update active icon state

    if (category === "search") {
      setIsSearchVisible(!isSearchVisible); // Toggle search bar visibility
    } else {
      setIsSearchVisible(false); // Hide search bar if another icon is clicked
    }

    onCategoryClick(category); // Trigger the parent handler
  };

  return (
    <div className="header">
      <div className="header__icons">
        <div
          className={`header__icon ${
            activeIcon === "home" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("home")}
        >
          <HomeIcon />
          <p>Home</p>
        </div>
        <div
          className={`header__icon ${
            activeIcon === "trending" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("trending")}
        >
          <BoltIcon />
          <p>Trending</p>
        </div>
        <div
          className={`header__icon ${
            activeIcon === "verified" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("verified")}
        >
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div
          className={`header__icon ${
            activeIcon === "collections" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("collections")}
        >
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div
          className={`header__icon ${
            activeIcon === "search" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("search")} // Toggle search bar visibility
        >
          <SearchIcon />
          <p>Search</p>
        </div>
        <div
          className={`header__icon ${
            activeIcon === "account" ? "header__icon--active" : ""
          }`}
          onClick={() => handleIconClick("account")}
        >
          <PersonOutlineOutlinedIcon />
          <p>Account</p>
        </div>
      </div>

      {/* Only display search bar when 'Search' icon is active */}
      {isSearchVisible && (
        <form className="header__search" onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search Movies..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      )}

      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="logo"
      />
    </div>
  );
}

export default Headers;
