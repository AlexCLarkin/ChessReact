import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";

class App extends React.Component {
  render() {
    return (
      <div id="background">
        <div>
          <button
            id="start-button"
            className="start-button"
            onClick={StartGame}
          >
            Start Game
          </button>
          <p id="turn-display" className="turn-display"></p>
          <ChessBoard />
        </div>
        <div id="display-taken-pieces">
          <p>Taken Pieces:</p>
          <div>
            <p id="white-pawns-display"></p>
            <p id="white-pieces-display"></p>
          </div>
          <div>
            <p id="black-pawns-display"></p>
            <p id="black-pieces-display"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
