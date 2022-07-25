import React from "react";

import ChessBoard from "./ChessBoard";
import StartGame from "./StartGame";
import SwitchTurnstest from "./SwitchTurnsTest";

class App extends React.Component {
  render() {
    return (
      <div>
        <button id="start-button" className="start-button" onClick={StartGame}>
          Start Game
        </button>
        <button onClick={SwitchTurnstest}>switch turns</button>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
