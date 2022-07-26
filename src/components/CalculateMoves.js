import react from "react";
import CancelMove from "./CancelMove";
import SwitchTurnstest from "./SwitchTurnsTest";
import BlackBishop from "./Pieces/BlackBishop";
import BlackQueen from "./Pieces/BlackQueen";

var SelectedPiece;
var positionOld;

const CalculateMoves = (event) => {
  var currentPosition = event.target;
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  if (currentPosition.classList.contains("black-queen")) {
    BlackQueen(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-queen";
  }

  if (currentPosition.classList.contains("black-bishop")) {
    BlackBishop(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-bishop";
  }

  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove(
      "white-pawn",
      "white-bishop",
      "white-king",
      "white-rook",
      "white-queen",
      "white-knight"
    );
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    SelectedPiece = "none";
    CancelMove();
    SwitchTurnstest();
  }
};

export default CalculateMoves;
