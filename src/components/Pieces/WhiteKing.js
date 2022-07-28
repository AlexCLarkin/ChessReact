import SquaresData from "../CreateSquaresData";

var moveCountery;
var moveCounterx;

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

const WhiteKing = (event) => {
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
      } else if (
        BlackPieces.some((className) =>
          positionNew.classList.contains(className)
        )
      ) {
        positionNew.classList.add("potential-move");
      } else {
        positionNew.classList.add("potential-move");
      }
    }
  };

  //White Queen Movement
  if (currentPosition.classList.contains("white-king")) {
    var findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    //moving upwards
    moveCountery = 0;
    moveCountery = moveCountery + 1;
    moveCounterx = 0;
    CalculatePieceMovement();

    //moving downwards
    moveCountery = 0;
    moveCountery = moveCountery - 1;
    moveCounterx = 0;
    CalculatePieceMovement();

    //moving left
    moveCounterx = 0;
    moveCounterx = moveCounterx + 1;
    moveCountery = 0;
    CalculatePieceMovement();

    //moving right
    moveCounterx = 0;
    moveCounterx = moveCounterx - 1;
    moveCountery = 0;
    CalculatePieceMovement();

    //moving up-right
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx - 1;
    moveCountery = moveCountery + 1;
    CalculatePieceMovement();

    //moving up-left
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx + 1;
    moveCountery = moveCountery + 1;
    CalculatePieceMovement();

    //moving down-right
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx - 1;
    moveCountery = moveCountery - 1;
    CalculatePieceMovement();

    //moving down-left
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx + 1;
    moveCountery = moveCountery - 1;
    CalculatePieceMovement();
  }
};

export default WhiteKing;
