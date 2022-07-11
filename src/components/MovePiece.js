import react from "react";
import SquaresData from "./CreateSquaresData";

const MovePiece = (event) => {
  var currentPosition = event.target;
  var newPosition;
  if (currentPosition.classList.contains("black-pawn")) {
    console.log("Selected piece: Black Pawn");
    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );
    newPosition = findPosition.number + 8;
    let findnewPosition = SquaresData.find(
      (newSquare) => newSquare.number === newPosition
    );

    let newPositionId = findnewPosition.coordinates;
    console.log("bozo" + newPositionId);
    let positionNew = document.getElementById(newPositionId);

    currentPosition.classList.remove("black-pawn");
    positionNew.classList.add("black-pawn");
  }
};

export default MovePiece;
