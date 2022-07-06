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
    <div class="chess-board">
      <div id="a8" class="chess-square white-square"></div>
      <div id="b8" class="chess-square black-square"></div>
      <div id="c8" class="chess-square white-square"></div>
      <div id="d8" class="chess-square black-square"></div>
      <div id="e8" class="chess-square white-square"></div>
      <div id="f8" class="chess-square black-square"></div>
      <div id="g8" class="chess-square white-square"></div>
      <div id="h8" class="chess-square black-square"></div>

      <div
        id="a7"
        class="chess-square black-square"
        onclick="movePiece(event)"
      ></div>
      <div id="b7" class="chess-square white-square"></div>
      <div id="c7" class="chess-square black-square"></div>
      <div id="d7" class="chess-square white-square"></div>
      <div id="e7" class="chess-square black-square"></div>
      <div id="f7" class="chess-square white-square"></div>
      <div id="g7" class="chess-square black-square"></div>
      <div id="h7" class="chess-square white-square"></div>

      <div id="a6" class="chess-square white-square"></div>
      <div id="b6" class="chess-square black-square"></div>
      <div id="c6" class="chess-square white-square"></div>
      <div id="d6" class="chess-square black-square"></div>
      <div id="e6" class="chess-square white-square"></div>
      <div id="f6" class="chess-square black-square"></div>
      <div id="g6" class="chess-square white-square"></div>
      <div id="h6" class="chess-square black-square"></div>

      <div id="a5" class="chess-square black-square"></div>
      <div id="b5" class="chess-square white-square"></div>
      <div id="c5" class="chess-square black-square"></div>
      <div id="d5" class="chess-square white-square"></div>
      <div id="e5" class="chess-square black-square"></div>
      <div id="f5" class="chess-square white-square"></div>
      <div id="g5" class="chess-square black-square"></div>
      <div id="h5" class="chess-square white-square"></div>

      <div id="a4" class="chess-square white-square"></div>
      <div id="b4" class="chess-square black-square"></div>
      <div id="c4" class="chess-square white-square"></div>
      <div id="d4" class="chess-square black-square"></div>
      <div id="e4" class="chess-square white-square"></div>
      <div id="f4" class="chess-square black-square"></div>
      <div id="g4" class="chess-square white-square"></div>
      <div id="h4" class="chess-square black-square"></div>

      <div id="a3" class="chess-square black-square"></div>
      <div id="b3" class="chess-square white-square"></div>
      <div id="c3" class="chess-square black-square"></div>
      <div id="d3" class="chess-square white-square"></div>
      <div id="e3" class="chess-square black-square"></div>
      <div id="f3" class="chess-square white-square"></div>
      <div id="g3" class="chess-square black-square"></div>
      <div id="h3" class="chess-square white-square"></div>

      <div
        id="a2"
        class="chess-square white-square bozo"
        onclick="movePiece(event)"
      ></div>
      <div id="b2" class="chess-square black-square"></div>
      <div id="c2" class="chess-square white-square"></div>
      <div id="d2" class="chess-square black-square"></div>
      <div id="e2" class="chess-square white-square"></div>
      <div id="f2" class="chess-square black-square"></div>
      <div id="g2" class="chess-square white-square"></div>
      <div id="h2" class="chess-square black-square"></div>

      <div id="a1" class="chess-square black-square "></div>
      <div id="b1" class="chess-square white-square "></div>
      <div id="c1" class="chess-square black-square "></div>
      <div id="d1" class="chess-square white-square "></div>
      <div id="e1" class="chess-square black-square "></div>
      <div id="f1" class="chess-square white-square "></div>
      <div id="g1" class="chess-square black-square "></div>
      <div id="h1" class="chess-square white-square "></div>
    </div>
  );
};

export default ChessBoard;
