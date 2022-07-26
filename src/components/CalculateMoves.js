import react from "react";
import CancelMove from "./CancelMove";
import SquaresData from "./CreateSquaresData";
import SwitchTurnstest from "./SwitchTurnsTest";
import BlackQueen from "./Pieces/BlackQueen";

var SelectedPiece;
var positionOld;
var moveCountery;
var moveCounterx;

const CalculateMoves = (event) => {
  BlackQueen(event);
};

export default CalculateMoves;
