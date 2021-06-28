import React from "react";

const LevelCard = (props) => {
  return (
    <div className="card-level-container" onClick={props.clicked}>
      <img className="card-level-img" src={props.img} alt={props.alt} />
      <span className="card-level-name">{props.children}</span>
    </div>
  );
};

export default LevelCard;
