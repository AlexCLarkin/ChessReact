import react from "react";
import CancelMove from "./CancelMove";
import SquaresData from "./CreateSquaresData";
import SwitchTurnstest from "./SwitchTurnsTest";

var SelectedPiece;
var positionOld;
var moveCountery;
var moveCounterx;

const CalculateMoves = (event) => {
  var currentPosition = event.target;

  //cancel move
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  if (currentPosition.classList.contains("black-queen")) {
    SelectedPiece = "black-queen";
    positionOld = document.getElementById(currentPosition.id);

    let findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    const moveQueen = () => {
      //find new position by adding move counter to current position
      let newPositiony = findPosition.y + moveCountery;
      let newPositionx = findPosition.x + moveCounterx;

      //turn the results into a string
      let positionNewy = newPositiony + "";
      let positionNewx = newPositionx + "";

      //find the new positions id by adding x and y
      let newPosition = positionNewx + positionNewy;
      let findNewPosition = SquaresData.find(
        (newSquare) => newSquare.coordinates === newPosition
      );
      //adding potential move to possible movement squares
      if (findNewPosition) {
        let positionNewCoords = findNewPosition.coordinates;
        let positionNew = document.getElementById(positionNewCoords);
        positionNew.classList.add("potential-move");
      }
    };

    //moving upwards
    moveCountery = 0;
    while (moveCountery < 8) {
      moveCountery = moveCountery + 1;
      moveCounterx = 0;
      moveQueen();
    }

    //moving downwards
    moveCountery = 0;
    while (moveCountery > -8) {
      moveCountery = moveCountery - 1;
      moveCounterx = 0;
      moveQueen();
    }

    //moving left
    moveCounterx = 0;
    while (moveCounterx < 8) {
      moveCounterx = moveCounterx + 1;
      moveCountery = 0;
      moveQueen();
    }

    //moving right
    moveCounterx = 0;
    while (moveCounterx > -8) {
      moveCounterx = moveCounterx - 1;
      moveCountery = 0;
      moveQueen();
    }
  }

  //Actually moving the pieces
  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove("white-pawn");
    currentPosition.classList.remove("black-pawn");
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    SwitchTurnstest();
    CancelMove();
  }
};

export default CalculateMoves;
