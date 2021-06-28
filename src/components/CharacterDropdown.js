import React from "react";
import CharacterDropdownField from "../util/CharacterDropdownField";
// n64 images
import Luigi from "../assets/characters/luigi.png";
import Conker from "../assets/characters/conker.png";
import Bobomb from "../assets/characters/bobomb.png";
// ps1 images
import PaRappa from "../assets/characters/parappa.png";
import Cloud from "../assets/characters/cloud.png";
import Crash from "../assets/characters/crash.png";
// dreamcast images
import Mew from "../assets/characters/mew.png";
import Sonic from "../assets/characters/sonic.png";
import Samba from "../assets/characters/samba.png";
// xbox
import _CJ from "../assets/characters/cj.png";
import Raz from "../assets/characters/raz.png";
import Ryu from "../assets/characters/ryu.png";
// ps2 images
import Prince from "../assets/characters/prince.png";
import Ratchet from "../assets/characters/ratchet.png";
import Tommy from "../assets/characters/tommy.png";
// gamecube images
import Boo from "../assets/characters/boo.png";
import Link from "../assets/characters/link.png";
import Mario from "../assets/characters/mario.png";
// xbox 360 images
import Chief from "../assets/characters/chief.png";
import Marcus from "../assets/characters/marcus.png";
import Niko from "../assets/characters/niko.png";
// xbox360 images
import Aurthur from "../assets/characters/aurthur.png";
import Kratos from "../assets/characters/kratos.png";
import Drake from "../assets/characters/drake.png";

const CharacterDropdown = ({
  characters = [],
  show,
  clickLocation,
  clicked,
}) => {
  const getCharacterImage = (character) => {
    switch (character) {
      // n64
      case "Luigi":
        return Luigi;
      case "Conker":
        return Conker;
      case "Bobomb":
        return Bobomb;
      // ps1
      case "PaRappa":
        return PaRappa;
      case "Cloud":
        return Cloud;
      case "Crash":
        return Crash;
      // ps1
      case "Mew":
        return Mew;
      case "Sonic":
        return Sonic;
      case "Samba":
        return Samba;
      // xbox
      case "CJ":
        return _CJ;
      case "Raz":
        return Raz;
      case "Ryu":
        return Ryu;
      // ps2
      case "Prince":
        return Prince;
      case "Ratchet":
        return Ratchet;
      case "Tommy":
        return Tommy;
      // gamecube
      case "Boo":
        return Boo;
      case "Link":
        return Link;
      case "Mario":
        return Mario;
      // xbox 360
      case "Master Chief":
        return Chief;
      case "Marcus":
        return Marcus;
      case "Niko":
        return Niko;
      // ps4
      case "Aurthur Morgan":
        return Aurthur;
      case "Kratos":
        return Kratos;
      case "Nathan Drake":
        return Drake;
      // default
      default:
        break;
    }
  };

  const CharactersDropdownFields = () => {
    return characters.map((character) => {
      return (
        <CharacterDropdownField
          image={getCharacterImage(character.name)}
          title={character.name}
          clicked={clicked}
        />
      );
    });
  };

  return (
    <div className={`${show ? "absolute" : "hidden"}`} style={clickLocation}>
      <div
        className="character-dropdown-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <CharactersDropdownFields />
      </div>
    </div>
  );
};

export default CharacterDropdown;
