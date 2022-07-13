import react from "react";
import CancelMove from "./CancelMove";
import SquaresData from "./CreateSquaresData";
import SwitchTurnstest from "./SwitchTurnsTest";

var SelectedPiece;
var positionOld;

const CalculateMoves = (event) => {
  var currentPosition = event.target;
  var newPosition;
  var extraPosition;

  //cancel move
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  //Calculates potential moves for black pawns
  if (currentPosition.classList.contains("black-pawn")) {
    SelectedPiece = "black-pawn";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );
    newPosition = findPosition.number + 8;
    let findnewPosition = SquaresData.find(
      (newSquare) => newSquare.number === newPosition
    );

    extraPosition = findPosition.number + 16;
    let findextraPosition = SquaresData.find(
      (newSquare) => newSquare.number === extraPosition
    );

    let newPositionId = findnewPosition.coordinates;
    let oldPositionId = findPosition.coordinates;
    let extraPositionId = findextraPosition.coordinates;

    console.log("bozo" + newPositionId);
    let positionNew = document.getElementById(newPositionId);
    positionOld = document.getElementById(oldPositionId);
    let positionExtra = document.getElementById(extraPositionId);

    positionNew.classList.add("potential-move");
    if (
      currentPosition.id === "a7" ||
      currentPosition.id === "b7" ||
      currentPosition.id === "c7" ||
      currentPosition.id === "d7" ||
      currentPosition.id === "e7" ||
      currentPosition.id === "f7" ||
      currentPosition.id === "g7" ||
      currentPosition.id === "h7"
    ) {
      positionExtra.classList.add("potential-move");
    }
  }
  //Black pawn END

  //Calculates moves for white pawns
  if (currentPosition.classList.contains("white-pawn")) {
    SelectedPiece = "white-pawn";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );
    newPosition = findPosition.number - 8;
    let findnewPosition = SquaresData.find(
      (newSquare) => newSquare.number === newPosition
    );

    extraPosition = findPosition.number - 16;
    let findextraPosition = SquaresData.find(
      (newSquare) => newSquare.number === extraPosition
    );

    let newPositionId = findnewPosition.coordinates;
    let oldPositionId = findPosition.coordinates;
    let extraPositionId = findextraPosition.coordinates;

    console.log("bozo" + newPositionId);
    let positionNew = document.getElementById(newPositionId);
    positionOld = document.getElementById(oldPositionId);
    let positionExtra = document.getElementById(extraPositionId);

    positionNew.classList.add("potential-move");
    if (
      currentPosition.id === "a2" ||
      currentPosition.id === "b2" ||
      currentPosition.id === "c2" ||
      currentPosition.id === "d2" ||
      currentPosition.id === "e2" ||
      currentPosition.id === "f2" ||
      currentPosition.id === "g2" ||
      currentPosition.id === "h2"
    ) {
      positionExtra.classList.add("potential-move");
    }
  }
  // White pawn END

  //Actually Moving the pieces
  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    SwitchTurnstest();
    CancelMove();
  }
};

export default CalculateMoves;
