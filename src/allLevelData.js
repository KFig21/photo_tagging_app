import n64Board from "./assets/boards/n64.jpg";
import ps1Board from "./assets/boards/ps1.jpg";
import xboxBoard from "./assets/boards/xbox.jpg";
import dreamcastBoard from "./assets/boards/dreamcast.jpg";
import ps2Board from "./assets/boards/ps2.jpg";
import gamecubeBoard from "./assets/boards/gamecube.jpg";
import xbox360Board from "./assets/boards/xbox360.jpg";
import ps4Board from "./assets/boards/ps4.jpg";

const levelData = {
  0: {
    level: 0,
    name: "N64",
    board: n64Board,
    characters: [
      {
        name: "Luigi",
        found: false,
        xCoord: 76,
        yCoord: 48,
      },
      {
        name: "Conker",
        found: false,
        xCoord: 39,
        yCoord: 58,
      },
      {
        name: "Bobomb",
        found: false,
        xCoord: 74,
        yCoord: 60,
      },
    ],
  },
  1: {
    level: 1,
    name: "PS1",
    board: ps1Board,
    characters: [
      {
        name: "Cloud",
        found: false,
        xCoord: 17,
        yCoord: 49,
      },
      {
        name: "Crash",
        found: false,
        xCoord: 56,
        yCoord: 57,
      },
      {
        name: "PaRappa",
        found: false,
        xCoord: 38,
        yCoord: 68,
      },
    ],
  },
  2: {
    level: 2,
    name: "Dreamcast",
    board: dreamcastBoard,
    characters: [
      {
        name: "Mew",
        found: false,
        xCoord: 66,
        yCoord: 68,
      },
      {
        name: "Sonic",
        found: false,
        xCoord: 27,
        yCoord: 40,
      },
      {
        name: "Samba",
        found: false,
        xCoord: 22,
        yCoord: 66,
      },
    ],
  },
  3: {
    level: 3,
    name: "XBox",
    board: xboxBoard,
    characters: [
      {
        name: "CJ",
        found: false,
        xCoord: 50,
        yCoord: 55,
      },
      {
        name: "Raz",
        found: false,
        xCoord: 37,
        yCoord: 40,
      },
      {
        name: "Ryu",
        found: false,
        xCoord: 88,
        yCoord: 45,
      },
    ],
  },
  4: {
    level: 4,
    name: "PS2",
    board: ps2Board,
    characters: [
      {
        name: "Prince",
        found: false,
        xCoord: 26,
        yCoord: 37,
      },
      {
        name: "Ratchet",
        found: false,
        xCoord: 46,
        yCoord: 60,
      },
      {
        name: "Tommy",
        found: false,
        xCoord: 68,
        yCoord: 53,
      },
    ],
  },
  5: {
    level: 5,
    name: "Gamecube",
    board: gamecubeBoard,
    characters: [
      {
        name: "Boo",
        found: false,
        xCoord: 81,
        yCoord: 46,
      },
      {
        name: "Link",
        found: false,
        xCoord: 67,
        yCoord: 66,
      },
      {
        name: "Mario",
        found: false,
        xCoord: 40,
        yCoord: 66,
      },
    ],
  },
  6: {
    level: 6,
    name: "XBox360",
    board: xbox360Board,
    characters: [
      {
        name: "Master Chief",
        found: false,
        xCoord: 73,
        yCoord: 59,
      },
      {
        name: "Marcus",
        found: false,
        xCoord: 58,
        yCoord: 51,
      },
      {
        name: "Niko",
        found: false,
        xCoord: 39,
        yCoord: 58,
      },
    ],
  },
  7: {
    level: 7,
    name: "PS4",
    board: ps4Board,
    characters: [
      {
        name: "Aurthur Morgan",
        found: false,
        xCoord: 23,
        yCoord: 36,
      },
      {
        name: "Kratos",
        found: false,
        xCoord: 61,
        yCoord: 55,
      },
      {
        name: "Nathan Drake",
        found: false,
        xCoord: 61,
        yCoord: 70,
      },
    ],
  },
};

export default levelData;
