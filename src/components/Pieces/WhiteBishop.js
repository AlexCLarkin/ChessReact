import SquaresData from "../CreateSquaresData";

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

const WhiteBishop = (event) => {
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

  //White Bishop Movement
  if (currentPosition.classList.contains("white-bishop")) {
    var findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    //moving up-right
    moveCounterx = 0;
    moveCountery = 0;
    stopMoving = false;
    while (moveCounterx > -8 && moveCountery < 8 && stopMoving === false) {
      moveCounterx = moveCounterx - 1;
      moveCountery = moveCountery + 1;
      CalculatePieceMovement();
    }

    //moving up-left
    moveCounterx = 0;
    moveCountery = 0;
    stopMoving = false;
    while (moveCounterx > -8 && moveCountery < 8 && stopMoving === false) {
      moveCounterx = moveCounterx + 1;
      moveCountery = moveCountery + 1;
      CalculatePieceMovement();
    }

    //moving down-right
    moveCounterx = 0;
    moveCountery = 0;
    stopMoving = false;
    while (moveCounterx < 8 && moveCountery > -8 && stopMoving === false) {
      moveCounterx = moveCounterx - 1;
      moveCountery = moveCountery - 1;
      CalculatePieceMovement();
    }

    //moving down-left
    moveCounterx = 0;
    moveCountery = 0;
    stopMoving = false;
    while (moveCounterx > -8 && moveCountery > -8 && stopMoving === false) {
      moveCounterx = moveCounterx + 1;
      moveCountery = moveCountery - 1;
      CalculatePieceMovement();
    }
  }
};

export default WhiteBishop;
