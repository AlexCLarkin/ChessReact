import React from "react";
import App from "./App";
import InitialPosition from "./InitialPosition";

const StartGame = () => {
  let StartButton = document.getElementById("start-button");
  StartButton.remove();
  InitialPosition();
  let WhitesTurn = true;
};

export default StartGame;
