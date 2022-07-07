import React from "react";
import App from "./App";
import InitialPosition from "./InitialPosition";
import Turns from "./Turns";

const StartGame = () => {
  let StartButton = document.getElementById("start-button");
  StartButton.remove();
  App.WhitesTurn = true;
  InitialPosition();
  Turns();
};

export default StartGame;
