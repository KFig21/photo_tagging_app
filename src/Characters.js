import React from "react";
// n64 images
import Luigi from "./assets/characters/luigi.png";
import Conker from "./assets/characters/conker.png";
import Bobomb from "./assets/characters/bobomb.png";
// ps1 images
import PaRappa from "./assets/characters/parappa.png";
import Cloud from "./assets/characters/cloud.png";
import Crash from "./assets/characters/crash.png";
// dreamcast images
import Mew from "./assets/characters/mew.png";
import Sonic from "./assets/characters/sonic.png";
import Samba from "./assets/characters/samba.png";
// xbox images
import _CJ from "./assets/characters/cj.png";
import Raz from "./assets/characters/raz.png";
import Ryu from "./assets/characters/ryu.png";
// ps2 images
import Prince from "./assets/characters/prince.png";
import Ratchet from "./assets/characters/ratchet.png";
import Tommy from "./assets/characters/tommy.png";
// gamecube images
import Boo from "./assets/characters/boo.png";
import Link from "./assets/characters/link.png";
import Mario from "./assets/characters/mario.png";
// xbox360 images
import Chief from "./assets/characters/chief.png";
import Marcus from "./assets/characters/marcus.png";
import Niko from "./assets/characters/niko.png";
// xbox360 images
import Aurthur from "./assets/characters/aurthur.png";
import Kratos from "./assets/characters/kratos.png";
import Drake from "./assets/characters/drake.png";

const Character = (props) => {
  let image = null;
  switch (props.name) {
    // n64
    case "Luigi":
      image = Luigi;
      break;
    case "Conker":
      image = Conker;
      break;
    case "Bobomb":
      image = Bobomb;
      break;
    // ps1
    case "PaRappa":
      image = PaRappa;
      break;
    case "Cloud":
      image = Cloud;
      break;
    case "Crash":
      image = Crash;
      break;
    // dreamcast
    case "Mew":
      image = Mew;
      break;
    case "Sonic":
      image = Sonic;
      break;
    case "Samba":
      image = Samba;
      break;
    // dreamcast
    case "CJ":
      image = _CJ;
      break;
    case "Raz":
      image = Raz;
      break;
    case "Ryu":
      image = Ryu;
      break;
    // ps2
    case "Prince":
      image = Prince;
      break;
    case "Ratchet":
      image = Ratchet;
      break;
    case "Tommy":
      image = Tommy;
      break;
    // gamecube
    case "Boo":
      image = Boo;
      break;
    case "Link":
      image = Link;
      break;
    case "Mario":
      image = Mario;
      break;
    // xbox 360
    case "Master Chief":
      image = Chief;
      break;
    case "Marcus":
      image = Marcus;
      break;
    case "Niko":
      image = Niko;
      break;
    // ps4
    case "Aurthur Morgan":
      image = Aurthur;
      break;
    case "Kratos":
      image = Kratos;
      break;
    case "Nathan Drake":
      image = Drake;
      break;
    default:
      break;
  }

  return (
    <div className={`character-container`}>
      <img
        className={`${props.found && "faded"} character-img`}
        src={image}
        alt={props.name}
      />
      <p className="character-name">{props.name}</p>
    </div>
  );
};

export default Character;
