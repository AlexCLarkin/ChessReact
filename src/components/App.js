import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";
import CreateSquareLoop from "./CreateSquaresLoop";

var ButtonText = "Start Game";

class App extends React.Component {
  render() {
    return (
      <div>
        <button id="start-button" className="start-button" onClick={StartGame}>
          {ButtonText}
        </button>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
