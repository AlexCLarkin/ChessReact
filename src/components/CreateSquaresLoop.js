import React from "react";
import SquaresData from "./CreateSquaresData";
import MovePiece from "./MovePiece";

var classname = "chess-square";

const CreateSquareLoop = SquaresData.map((squares) => {
  console.log(squares);
  if (squares.color === 1) {
    classname = "chess-square white-square";
  } else if (squares.color === 0) {
    classname = "chess-square black-square";
  }
  console.log(classname);

  return (
    <div
      id={squares.coordinates}
      className={classname}
      key={squares.number}
      onClick={MovePiece}
    ></div>
  );
});

export default CreateSquareLoop;
