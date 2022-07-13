import React from "react";
import SquaresData from "./CreateSquaresData";
import CalculateMoves from "./CalculateMoves";

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
      onClick={CalculateMoves}
    ></div>
  );
});

export default CreateSquareLoop;
