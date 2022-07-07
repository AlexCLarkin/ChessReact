import React from "react";

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
  return (
    <div className="chess-board">
      <div id="a8" className="chess-square white-square"></div>
      <div id="b8" className="chess-square black-square"></div>
      <div id="c8" className="chess-square white-square"></div>
      <div id="d8" className="chess-square black-square"></div>
      <div id="e8" className="chess-square white-square"></div>
      <div id="f8" className="chess-square black-square"></div>
      <div id="g8" className="chess-square white-square"></div>
      <div id="h8" className="chess-square black-square"></div>

      <div id="a7" className="chess-square black-square"></div>
      <div id="b7" className="chess-square white-square"></div>
      <div id="c7" className="chess-square black-square"></div>
      <div id="d7" className="chess-square white-square"></div>
      <div id="e7" className="chess-square black-square"></div>
      <div id="f7" className="chess-square white-square"></div>
      <div id="g7" className="chess-square black-square"></div>
      <div id="h7" className="chess-square white-square"></div>

      <div id="a6" className="chess-square white-square"></div>
      <div id="b6" className="chess-square black-square"></div>
      <div id="c6" className="chess-square white-square"></div>
      <div id="d6" className="chess-square black-square"></div>
      <div id="e6" className="chess-square white-square"></div>
      <div id="f6" className="chess-square black-square"></div>
      <div id="g6" className="chess-square white-square"></div>
      <div id="h6" className="chess-square black-square"></div>

      <div id="a5" className="chess-square black-square"></div>
      <div id="b5" className="chess-square white-square"></div>
      <div id="c5" className="chess-square black-square"></div>
      <div id="d5" className="chess-square white-square"></div>
      <div id="e5" className="chess-square black-square"></div>
      <div id="f5" className="chess-square white-square"></div>
      <div id="g5" className="chess-square black-square"></div>
      <div id="h5" className="chess-square white-square"></div>

      <div id="a4" className="chess-square white-square"></div>
      <div id="b4" className="chess-square black-square"></div>
      <div id="c4" className="chess-square white-square"></div>
      <div id="d4" className="chess-square black-square"></div>
      <div id="e4" className="chess-square white-square"></div>
      <div id="f4" className="chess-square black-square"></div>
      <div id="g4" className="chess-square white-square"></div>
      <div id="h4" className="chess-square black-square"></div>

      <div id="a3" className="chess-square black-square"></div>
      <div id="b3" className="chess-square white-square"></div>
      <div id="c3" className="chess-square black-square"></div>
      <div id="d3" className="chess-square white-square"></div>
      <div id="e3" className="chess-square black-square"></div>
      <div id="f3" className="chess-square white-square"></div>
      <div id="g3" className="chess-square black-square"></div>
      <div id="h3" className="chess-square white-square"></div>

      <div id="a2" className="chess-square white-square bozo"></div>
      <div id="b2" className="chess-square black-square"></div>
      <div id="c2" className="chess-square white-square"></div>
      <div id="d2" className="chess-square black-square"></div>
      <div id="e2" className="chess-square white-square"></div>
      <div id="f2" className="chess-square black-square"></div>
      <div id="g2" className="chess-square white-square"></div>
      <div id="h2" className="chess-square black-square"></div>

      <div id="a1" className="chess-square black-square "></div>
      <div id="b1" className="chess-square white-square "></div>
      <div id="c1" className="chess-square black-square "></div>
      <div id="d1" className="chess-square white-square "></div>
      <div id="e1" className="chess-square black-square "></div>
      <div id="f1" className="chess-square white-square "></div>
      <div id="g1" className="chess-square black-square "></div>
      <div id="h1" className="chess-square white-square "></div>
    </div>
  );
};

export default ChessBoard;
