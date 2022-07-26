import react from "react";
import SquaresData from "../CreateSquaresData";
import CancelMove from "../CancelMove";
import SwitchTurnstest from "../SwitchTurnsTest";

var SelectedPiece;
var positionOld;
var moveCountery;
var moveCounterx;

const BlackQueen = (event) => {
  var currentPosition = event.target;

  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  const CalculatePieceMovement = () => {
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

  //Black Queen Movement
  if (currentPosition.classList.contains("black-queen")) {
    SelectedPiece = "black-queen";
    positionOld = document.getElementById(currentPosition.id);

    var findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    //moving upwards
    moveCountery = 0;
    while (moveCountery < 8) {
      moveCountery = moveCountery + 1;
      moveCounterx = 0;
      CalculatePieceMovement();
    }

    //moving downwards
    moveCountery = 0;
    while (moveCountery > -8) {
      moveCountery = moveCountery - 1;
      moveCounterx = 0;
      CalculatePieceMovement();
    }

    //moving left
    moveCounterx = 0;
    while (moveCounterx < 8) {
      moveCounterx = moveCounterx + 1;
      moveCountery = 0;
      CalculatePieceMovement();
    }

    //moving right
    moveCounterx = 0;
    while (moveCounterx > -8) {
      moveCounterx = moveCounterx - 1;
      moveCountery = 0;
      CalculatePieceMovement();
    }

    //moving up-right
    moveCounterx = 0;
    moveCountery = 0;
    while (moveCounterx > -8 && moveCountery < 8) {
      moveCounterx = moveCounterx - 1;
      moveCountery = moveCountery + 1;
      CalculatePieceMovement();
    }

    //moving up-left
    moveCounterx = 0;
    moveCountery = 0;
    while (moveCounterx > -8 && moveCountery < 8) {
      moveCounterx = moveCounterx + 1;
      moveCountery = moveCountery + 1;
      CalculatePieceMovement();
    }

    //moving down-right
    moveCounterx = 0;
    moveCountery = 0;
    while (moveCounterx < 8 && moveCountery > -8) {
      moveCounterx = moveCounterx - 1;
      moveCountery = moveCountery - 1;
      CalculatePieceMovement();
    }

    //moving down-left
    moveCounterx = 0;
    moveCountery = 0;
    while (moveCounterx > -8 && moveCountery > -8) {
      moveCounterx = moveCounterx + 1;
      moveCountery = moveCountery - 1;
      CalculatePieceMovement();
    }
  }

  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove("white-pawn");
    currentPosition.classList.remove("black-pawn");
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    CancelMove();
    SwitchTurnstest();
  }
};

export default BlackQueen;
