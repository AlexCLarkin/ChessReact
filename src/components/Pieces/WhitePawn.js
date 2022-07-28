import SquaresData from "../CreateSquaresData";

var moveCountery;
var moveCounterx;
var capturePiece;

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

var startingPosition = ["82", "72", "62", "52", "42", "32", "22", "12"];

const WhitePawn = (event) => {
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
      } else if (capturePiece === true) {
        if (
          BlackPieces.some((className) =>
            positionNew.classList.contains(className)
          )
        ) {
          positionNew.classList.add("potential-move");
        } else {
          console.log("no piece to capture");
        }
      } else if (
        BlackPieces.some((className) =>
          positionNew.classList.contains(className)
        )
      ) {
      } else {
        positionNew.classList.add("potential-move");
      }
    }
  };

  //White Pawn Movement
  if (currentPosition.classList.contains("white-pawn")) {
    var findPosition = SquaresData.find(
      (newSquare) => newSquare.coordinates === currentPosition.id
    );

    //moving upwards

    if (
      startingPosition.some((className) =>
        currentPosition.id.includes(className)
      )
    ) {
      moveCountery = 0;
      moveCountery = moveCountery + 1;
      moveCounterx = 0;
      capturePiece = false;
      CalculatePieceMovement();
      moveCountery = moveCountery + 1;
      moveCounterx = 0;
      capturePiece = false;
      CalculatePieceMovement();
    } else {
      moveCountery = 0;
      moveCountery = moveCountery + 1;
      moveCounterx = 0;
      capturePiece = false;
      CalculatePieceMovement();
    }

    //moving up-right
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx - 1;
    moveCountery = moveCountery + 1;
    capturePiece = true;
    CalculatePieceMovement();

    //moving up-left
    moveCounterx = 0;
    moveCountery = 0;
    moveCounterx = moveCounterx + 1;
    moveCountery = moveCountery + 1;
    capturePiece = true;
    CalculatePieceMovement();
  }
};

export default WhitePawn;
