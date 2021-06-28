import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${
        props.active ? "leaderboard-level-container-active " : " "
      }  leaderboard-level-container`}
      onClick={props.clicked}
    >
      <img
        className={`${
          props.active ? "leaderboard-level-image-active " : " "
        }  leaderboard-level-image`}
        src={props.img}
        alt={props.alt}
      />
      <span className="leaderboard-level-name">{props.children}</span>
    </div>
  );
};

export default Card;
