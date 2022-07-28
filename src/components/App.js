import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";
import SwitchTurnstest from "./SwitchTurnsTest";

class App extends React.Component {
  render() {
    return (
      <div id="background">
        <button id="start-button" className="start-button" onClick={StartGame}>
          Start Game
        </button>
        <p id="turn-display" className="turn-display"></p>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
