import react from "react";

const DisplayTakenPieces = () => {
  var WhitePieces = "";
  var BlackPieces = "";

  let countWhitePawns = document.querySelectorAll(".white-pawn").length;
  if (countWhitePawns === 7) {
    document.getElementById("white-pawns-display").innerHTML = "♙";
  }
  if (countWhitePawns === 6) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙";
  }
  if (countWhitePawns === 5) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙";
  }
  if (countWhitePawns === 4) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙";
  }
  if (countWhitePawns === 3) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙";
  }
  if (countWhitePawns === 2) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙";
  }
  if (countWhitePawns === 1) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙♙";
  }
  if (countWhitePawns === 0) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙♙♙";
  }

  let countWhiteQueens = document.querySelectorAll(".white-queen").length;
  if (countWhiteQueens === 0) {
    WhitePieces = WhitePieces + "♕";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhitekings = document.querySelectorAll(".white-king").length;
  if (countWhitekings === 0) {
    WhitePieces = WhitePieces + "♔";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteBishops = document.querySelectorAll(".white-bishop").length;
  if (countWhiteBishops === 1) {
    WhitePieces = WhitePieces + "♗";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteBishops === 0) {
    WhitePieces = WhitePieces + "♗♗";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteKnights = document.querySelectorAll(".white-knight").length;
  if (countWhiteKnights === 1) {
    WhitePieces = WhitePieces + "♘";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteKnights === 0) {
    WhitePieces = WhitePieces + "♘♘";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteRooks = document.querySelectorAll(".white-rook").length;
  if (countWhiteRooks === 1) {
    WhitePieces = WhitePieces + "♖";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteRooks === 0) {
    WhitePieces = WhitePieces + "♖♖";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countBlackPawns = document.querySelectorAll(".black-pawn").length;
  if (countBlackPawns === 7) {
    document.getElementById("black-pawns-display").innerHTML = "♟";
  }
  if (countBlackPawns === 6) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟";
  }
  if (countBlackPawns === 5) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟";
  }
  if (countBlackPawns === 4) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟♟";
  }
  if (countBlackPawns === 3) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟♟♟";
  }
  if (countBlackPawns === 2) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟♟♟♟";
  }
  if (countBlackPawns === 1) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟♟♟♟♟";
  }
  if (countBlackPawns === 0) {
    document.getElementById("black-pawns-display").innerHTML = "♟♟♟♟♟♟♟♟";
  }

  let countBlackQueens = document.querySelectorAll(".black-queen").length;
  if (countBlackQueens === 0) {
    BlackPieces = BlackPieces + "♛";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }

  let countBlackkings = document.querySelectorAll(".black-king").length;
  if (countBlackkings === 0) {
    BlackPieces = BlackPieces + "♚";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }

  let countBlackBishops = document.querySelectorAll(".black-bishop").length;
  if (countBlackBishops === 1) {
    BlackPieces = BlackPieces + "♝";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }
  if (countBlackBishops === 0) {
    BlackPieces = BlackPieces + "♝♝";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }

  let countBlackKnights = document.querySelectorAll(".black-knight").length;
  if (countBlackKnights === 1) {
    BlackPieces = BlackPieces + "♞";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }
  if (countBlackKnights === 0) {
    BlackPieces = BlackPieces + "♞♞";
    document.getElementById("black-pieces-display").innerHTML = BlackPieces;
  }

  let countBlackRooks = document.querySelectorAll(".black-rook").length;
  if (countBlackRooks === 1) {
    BlackPieces = BlackPieces + "♜";
    document.getElementById("white-pieces-display").innerHTML = BlackPieces;
  }
  if (countBlackRooks === 0) {
    BlackPieces = BlackPieces + "♜♜";
    document.getElementById("Black-pieces-display").innerHTML = BlackPieces;
  }
};

export default DisplayTakenPieces;
