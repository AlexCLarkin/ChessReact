import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";

class App extends React.Component {
  render() {
    return (
      <div id="background">
        <button id="start-button" className="start-button" onClick={StartGame}>
          Start Game
        </button>
        <p id="turn-display" className="turn-display"></p>
        <ChessBoard />
        <div>
          <p>Taken Pieces:</p>
          <p id="white-pawns-display"></p>
          <p id="white-pieces-display"></p>
        </div>
      </div>
    );
  }
}

export default App;
