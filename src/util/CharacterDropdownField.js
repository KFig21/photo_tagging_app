import React from "react";

const CharacterDropdownField = (props) => {
  return (
    <a
      key={props.title}
      href="#menuitem"
      className="character-dropdown-a"
      onClick={() => props.clicked(props.title)}
      role="menuitem"
    >
      <div className="character-dropdown-div">
        <img
          className="character-dropdown-img"
          src={props.image}
          alt={props.title}
        />
        <div>{props.title}</div>
      </div>
    </a>
  );
};

export default CharacterDropdownField;
