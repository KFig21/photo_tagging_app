import React from "react";
import LevelCard from "../components/LevelCard";
import { Link } from "react-router-dom";

const Home = ({
  setLevel,
  levelData = {},
  setInGame,
  setInLeaderboard,
  setInHome,
  setInInfo,
}) => {
  setInLeaderboard(false);
  setInHome(true);
  setInGame(false);
  setInInfo(false);

  const links = Object.keys(levelData)?.map((number) => {
    const link = levelData[number];
    const characters = link.characters;
    const key = `level ${link.level} ${link.name}`;

    return (
      <Link to="/game" key={key}>
        <LevelCard
          img={link.board}
          clicked={() => {
            setLevel(link.level);
            setInGame(true);
          }}
          alt={`Level ${link.level}`}
          {...characters}
        >
          {link.name}
        </LevelCard>
      </Link>
    );
  });
  return <div className="home-levels-container">{links}</div>;
};

export default Home;
