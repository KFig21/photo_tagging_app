import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
    <AppBar className="navbar-container">
      <Toolbar className="navbar">
        {inHome === true && (
          <>
            <button className="left-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/leaderboard">
                Leaderboard
              </Link>
            </button>
            <img className="logo" src={logo} alt="logo" />
            <button className="right-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/info">
                Info
              </Link>
            </button>
          </>
        )}
        {inGame === true && (
          <>
            <button className="left-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/">
                Home
              </Link>
            </button>
            <div className="nav-container">{gameCharacters}</div>
          </>
        )}
        {inLeaderboard === true && (
          <>
            <button
              className="left-nav-button nav-button"
              onClick={() => setInGame(false)}
            >
              <Link style={{ color: "#FFF" }} to="/">
                Home
              </Link>
            </button>
            <span className="leaderboard-title">Leaderboard</span>
          </>
        )}
        {inInfo === true && (
          <>
            <button className="left-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/">
                Home
              </Link>
            </button>
            <img className="logo" src={logo} alt="logo" />
            <button className="right-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/leaderboard">
                Leaderboard
              </Link>
            </button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
