import CancelMove from "./CancelMove";
import SwitchTurnstest from "./SwitchTurnsTest";
import BlackBishop from "./Pieces/BlackBishop";
import BlackQueen from "./Pieces/BlackQueen";
import BlackPawn from "./Pieces/BlackPawn";
import BlackRook from "./Pieces/BlackRook";
import BlackKing from "./Pieces/BlackKing";
import BlackKnight from "./Pieces/BlackKnight";
import WhiteQueen from "./Pieces/WhiteQueen";
import WhiteBishop from "./Pieces/WhiteBishop";
import WhiteKing from "./Pieces/WhiteKing";
import WhitePawn from "./Pieces/WhitePawn";
import WhiteRook from "./Pieces/WhiteRook";
import WhiteKnight from "./Pieces/WhiteKnight";
import DisplayTakenPieces from "./DisplayTakenPieces";

var SelectedPiece;
var positionOld;

var Row8 = ["88", "78", "68", "58", "48", "38", "28", "18"];
var Row1 = ["81", "71", "61", "51", "41", "31", "21", "11"];

const CalculateMoves = (event) => {
  var currentPosition = event.target;
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  //movement for black queen
  if (
    currentPosition.classList.contains("black-queen") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackQueen(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-queen";
  }

  //movement for black bishop
  if (
    currentPosition.classList.contains("black-bishop") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackBishop(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-bishop";
  }

  //movement for black pawn
  if (
    currentPosition.classList.contains("black-pawn") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackPawn(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-pawn";
  }

  //movement for black-rook
  if (
    currentPosition.classList.contains("black-rook") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackRook(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-rook";
  }

  //movement for black king
  if (
    currentPosition.classList.contains("black-king") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackKing(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-king";
  }

  //movement for black knight
  if (
    currentPosition.classList.contains("black-knight") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    BlackKnight(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "black-knight";
  }

  //movement for white queen
  if (
    currentPosition.classList.contains("white-queen") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhiteQueen(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-queen";
  }

  //movement for white bishop
  if (
    currentPosition.classList.contains("white-bishop") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhiteBishop(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-bishop";
  }

  //movemen for white king
  if (
    currentPosition.classList.contains("white-king") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhiteKing(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-king";
  }

  //movement for white pawn
  if (
    currentPosition.classList.contains("white-pawn") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhitePawn(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-pawn";
  }

  //movement for white rook
  if (
    currentPosition.classList.contains("white-rook") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhiteRook(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-rook";
  }

  //movement for white knight
  if (
    currentPosition.classList.contains("white-knight") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    WhiteKnight(event);
    positionOld = document.getElementById(currentPosition.id);
    SelectedPiece = "white-knight";
  }

  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove(
      "white-pawn",
      "white-bishop",
      "white-king",
      "white-rook",
      "white-queen",
      "white-knight",
      "black-pawn",
      "black-bishop",
      "black-king",
      "black-rook",
      "black-queen",
      "black-knight"
    );
    DisplayTakenPieces();
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    if (
      Row8.some((className) => currentPosition.id === className) &&
      SelectedPiece === "white-pawn"
    ) {
      currentPosition.classList.add("white-queen");
    } else if (
      Row1.some((className) => currentPosition.id === className) &&
      SelectedPiece === "black-pawn"
    ) {
      currentPosition.classList.add("black-queen");
    } else {
      currentPosition.classList.add(SelectedPiece);
    }
    SelectedPiece = "none";
    CancelMove();
    SwitchTurnstest();
  }
};

export default CalculateMoves;
