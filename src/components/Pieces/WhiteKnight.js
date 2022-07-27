import react from "react";
import SquaresData from "../CreateSquaresData";
import CancelMove from "../CancelMove";
import SwitchTurnstest from "../SwitchTurnsTest";

var moveCountery;
var moveCounterx;
var stopMoving = false;

var BlackPieces = [
  "black-pawn",
  "black-bishop",
  "black-king",
  "black-queen",
  "black-rook",
  "black-knight",
];

var WhitePieces = [
  "white-pawn",
  "white-bishop",
  "white-king",
  "white-queen",
  "white-rook",
  "white-knight",
];

const WhiteKnight = (event) => {
  var currentPosition = event.target;

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
    //finding the new position
    if (findNewPosition) {
      let positionNewCoords = findNewPosition.coordinates;
      var positionNew = document.getElementById(positionNewCoords);

      //making sure it cant pass through other pieces and adding potential move class
      if (
        WhitePieces.some((className) =>
          positionNew.classList.contains(className)
        )
      ) {
        stopMoving = true;
      } else if (
        BlackPieces.some((className) =>
          positionNew.classList.contains(className)
        )
      ) {
        stopMoving = true;
        positionNew.classList.add("potential-move");
      } else {
        positionNew.classList.add("potential-move");
      }
    }
  };

  //White knight Movement
  if (currentPosition.classList.contains("white-knight")) {
    var findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    //moving down 2 and right 1
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery - 2;
    moveCounterx = moveCounterx - 1;
    CalculatePieceMovement();

    //moving down 1 and right 2
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery - 1;
    moveCounterx = moveCounterx - 2;
    CalculatePieceMovement();

    //moving down 2 and left 1
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery - 2;
    moveCounterx = moveCounterx + 1;
    CalculatePieceMovement();

    //moving down 1 and left 2
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery - 1;
    moveCounterx = moveCounterx + 2;
    CalculatePieceMovement();

    //moving up 2 and right 1
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery + 2;
    moveCounterx = moveCounterx - 1;
    CalculatePieceMovement();

    //moving up 1 and right 2
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery + 1;
    moveCounterx = moveCounterx - 2;
    CalculatePieceMovement();

    //moving up 2 and left 1
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery + 2;
    moveCounterx = moveCounterx + 1;
    CalculatePieceMovement();

    //moving up1 and left 2
    moveCountery = 0;
    moveCounterx = 0;
    stopMoving = false;
    moveCountery = moveCountery + 1;
    moveCounterx = moveCounterx + 2;
    CalculatePieceMovement();
  }
};

export default WhiteKnight;
