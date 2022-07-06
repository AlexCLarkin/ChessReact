import React from "react";

import ChessBoard from "./ChessBoard";
import InitialPostition from "./InitialPosition";

class App extends React.Component {
  render() {
    return (
      <div>
        <button id="start-button" onClick={InitialPostition}>
          Start Game
        </button>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
