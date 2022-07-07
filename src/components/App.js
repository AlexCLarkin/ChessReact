import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";
import CreateSquareLoop from "./CreateSquaresLoop";
import Turns from "./Turns";
import SwitchTurnstest from "./SwitchTurnsTest";

var ButtonText = "Start Game";
var WhitesTurn = true;

class App extends React.Component {
  render() {
    return (
      <div>
        <button id="start-button" className="start-button" onClick={StartGame}>
          {ButtonText}
        </button>
        <button onClick={SwitchTurnstest}>switch turns</button>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
