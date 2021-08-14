import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Material UI
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import HomeIcon from "@material-ui/icons/Home";
// Components
import Character from "../Characters";
// logo
import logo from "../assets/images/logo.png";

export default function Navbar({
  inGame,
  setInGame,
  characters,
  inLeaderboard,
  inHome,
  inInfo,
}) {
  let gameCharacters;

  gameCharacters = characters.map((character) => {
    return (
      <Character
        name={character.name}
        found={character.found}
        key={character.name}
      />
    );
  });

  return (
    <div className="navbar">
      {inHome === true && (
        <>
          <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/leaderboard">
              <button className="left-nav-button nav-button">
                <span className="nav-button-span">Leaderboard</span>
                <StarsOutlinedIcon className="nav-button-icon" />
              </button>
            </Link>
          </div>
          <img className="logo" src={logo} alt="logo" />
          <div className="nav-button-container">
            <button className="right-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/info">
                <span className="nav-button-span">Info</span>
                <PermIdentityOutlinedIcon className="nav-button-icon" />
              </Link>
            </button>
          </div>
        </>
      )}
      {inGame === true && (
        <>
          <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/">
              <button className="left-nav-button nav-button">
                <span className="nav-button-span">Home</span>
                <HomeIcon className="nav-button-icon" />
              </button>
            </Link>
          </div>

          <div className="nav-container">{gameCharacters}</div>

          <div className="nav-button-container nav-button-container-empty"></div>
        </>
      )}
      {inLeaderboard === true && (
        <>
          <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/">
              <button
                className="left-nav-button nav-button"
                onClick={() => setInGame(false)}
              >
                <span className="nav-button-span">Home</span>
                <HomeIcon className="nav-button-icon" />
              </button>
            </Link>
          </div>
          <span className="leaderboard-title">Leaderboard</span>
          <div className="nav-button-container">
            <button className="right-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/info">
                <span className="nav-button-span">Info</span>
                <PermIdentityOutlinedIcon className="nav-button-icon" />
              </Link>
            </button>
          </div>
        </>
      )}
      {inInfo === true && (
        <>
          <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/">
              <button className="left-nav-button nav-button">
                <span className="nav-button-span">Home</span>
                <HomeIcon className="nav-button-icon" />
              </button>
            </Link>
          </div>

          <img className="logo" src={logo} alt="logo" />

          <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/leaderboard">
              <button className="right-nav-button nav-button">
                <span className="nav-button-span">Leaderboard</span>
                <StarsOutlinedIcon className="nav-button-icon" />
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
