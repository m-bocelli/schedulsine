import Phaser, { Game } from "phaser";
import Shift1 from "./scenes/shift1";
import Shift3 from "./scenes/shift3";
import PreloadScene from "./scenes/preloadScene";
import MainMenu from "./scenes/mainMenu";
import ShiftGUI from "./scenes/shiftGUI";
import TutorialMenu from "./scenes/tutorialMenu";
import CareerMenu from ".//scenes/careerMenu";
import Tutorial from "./scenes/tutorial";
import MetricReport from "./scenes/metricReport";
import Shift2 from "./scenes/shift2";
import FinishWeek from "./scenes/finishWeek";
import CompetitiveMenu from "./scenes/competitiveMenu";
import ShiftX from "./scenes/shiftX";

const config: Phaser.Types.Core.GameConfig = {
  title: "Schedulsine",
  version: "beta",
  type: Phaser.AUTO,
  backgroundColor: "903",
  scale: {
    parent: "phaser-game",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  scene: [
    PreloadScene,
    MainMenu,
    TutorialMenu,
    CareerMenu,
    CompetitiveMenu,
    Tutorial,
    MetricReport,
    Shift1,
    Shift3,
    Shift2,
    ShiftX,
    FinishWeek,
    ShiftGUI,
  ],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { x: 0, y: 300 },
    },
  },
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
    gamepad: false,
  },
  render: {
    pixelArt: true,
    antialias: true,
  },
  dom: {
    createContainer: true,
  },
};

function StartGame(parent: string) {
  return new Game({ ...config, parent });
}

export default StartGame;
