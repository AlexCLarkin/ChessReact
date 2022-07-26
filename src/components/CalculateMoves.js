import react from "react";
import CancelMove from "./CancelMove";
import BlackQueen from "./Pieces/BlackQueen";

const CalculateMoves = (event) => {
  var currentPosition = event.target;
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }
  BlackQueen(event);
};

export default CalculateMoves;
