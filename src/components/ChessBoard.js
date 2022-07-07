import React from "react";
import CreateSquareLoop from "./CreateSquaresLoop";

//Black pieces
import BlackPawn from "./pieces/BlackPawn";
import BlackRook from "./pieces/BlackRook";
import BlackKnight from "./pieces/BlackKnight";
import BlackBishop from "./pieces/BlackBishop";
import BlackQueen from "./pieces/BlackQueen";
import BlackKing from "./pieces/BlackKing";

//White pieces
import WhitePawn from "./pieces/WhitePawn";
import WhiteRook from "./pieces/WhiteRook";
import WhiteKnight from "./pieces/WhiteKnight";
import WhiteBishop from "./pieces/WhiteBishop";
import WhiteQueen from "./pieces/WhiteQueen";
import WhiteKing from "./pieces/WhiteKing";

const ChessBoard = () => {
  return <div className="chess-board">{CreateSquareLoop}</div>;
};

export default ChessBoard;
