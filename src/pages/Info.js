import React from "react";
import githubLogo from "../assets/images/GitHub-Mark-Light-32px.png";

export default function Info({
  setInGame,
  setInInfo,
  setInHome,
  setInLeaderboard,
}) {
  setInLeaderboard(false);
  setInHome(false);
  setInGame(false);
  setInInfo(true);

  return (
    <div className="info-container">
      <div className="about-p">
        This project was made by{" "}
        <a
          href="https://github.com/KFig21"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-a"
        >
          <img class="github-logo" src={githubLogo} alt="github"></img>
          KFig21
        </a>{" "}
        for The Odin Project
      </div>
      <ul className="info-ul">
        <li className="info-li">
          Built the front end and game logic using React
        </li>
        <li className="info-li">
          Utilized Firebase-firestore for a back end database
        </li>
        <li className="info-li">Global leaderboard for 8 unique levels</li>
        <li className="info-li">
          Explitive usernames submitted to the leaderboard are censored
        </li>
      </ul>
      <p className="about-p">
        Game console images provided by
        <a
          href="https://www.artstation.com/pierreroussel"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link-a"
        >
          {" "}
          Pierre Roussel
        </a>
      </p>
      <ul className="info-ul">
        <li className="info-li">
          <a
            href="https://www.artstation.com/artwork/oOVVlJ"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Full collection here at Artstation
          </a>
        </li>
        <li className="info-li">
          <a
            href="https://www.etsy.com/shop/Angerinet"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Prints available on his Etsy shop
          </a>
        </li>
        <li className="info-li">
          <a
            href="https://www.instagram.com/angerinet/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Follow on Instagram @angerinet
          </a>
        </li>
      </ul>
    </div>
  );
}
