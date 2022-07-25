import react from "react";
import CancelMove from "./CancelMove";
import SquaresData from "./CreateSquaresData";
import SwitchTurnstest from "./SwitchTurnsTest";

var SelectedPiece;
var positionOld;
var amountOfMoves;

const CalculateMoves = (event) => {
  var currentPosition = event.target;

  //cancel move
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  //Calculates potential moves for black pawns
  if (
    currentPosition.classList.contains("black-pawn") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    SelectedPiece = "black-pawn";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );

    //move forward
    const moveForwardPawn = () => {
      let newPosition = findPosition.number + amountOfMoves;
      let findnewPosition = SquaresData.find(
        (newSquare) => newSquare.number === newPosition
      );
      let newPositionId = findnewPosition.coordinates;
      let positionNew = document.getElementById(newPositionId);
      if (!positionNew.classList.contains("white-pawn")) {
        positionNew.classList.add("potential-move");
      } else {
        console.log("can't move forward");
      }
    };

    //capture pawns on diagonals
    const pawnsCapture = () => {
      let CapturePosition = findPosition.number + amountOfMoves;
      let findcapturePosition = SquaresData.find(
        (newSquare) => newSquare.number === CapturePosition
      );
      let capturePositionId = findcapturePosition.coordinates;
      let positionCapture = document.getElementById(capturePositionId);
      if (positionCapture.classList.contains("white-pawn")) {
        positionCapture.classList.add("potential-move");
      }
    };

    //Old position
    let oldPositionId = findPosition.coordinates;
    positionOld = document.getElementById(oldPositionId);

    //calling functions
    amountOfMoves = 8;
    moveForwardPawn();
    if (currentPosition.id.includes(7)) {
      amountOfMoves = 16;
      moveForwardPawn();
    }
    amountOfMoves = 9;
    pawnsCapture();
    amountOfMoves = 7;
    pawnsCapture();
  }

  //Black pawn END

  //Black Queen's movement
  if (currentPosition.classList.contains("black-queen")) {
    SelectedPiece = "black-queen";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );

    const moveQueen = () => {
      let move = findPosition.number + amountOfMoves;
      if (move < 63 && move > -1) {
        let findMove = SquaresData.find(
          (newSquare) => newSquare.number === move
        );
        let moveId = findMove.coordinates;
        let Move = document.getElementById(moveId);
        if (!Move.classList.contains("black-pawn")) {
          Move.classList.add("potential-move");
        } else {
          console.log("can't move ");
        }
      } else {
        console.log("can't move");
      }
    };

    //Old Position
    let oldPositionId = findPosition.coordinates;
    positionOld = document.getElementById(oldPositionId);

    //Calling functions
    amountOfMoves = 0;
    while (amountOfMoves < 56) {
      amountOfMoves = amountOfMoves + 8;
      moveQueen();
    }
    amountOfMoves = 0;
    while (amountOfMoves > -56) {
      amountOfMoves = amountOfMoves - 8;
      moveQueen();
    }

    if (currentPosition.id.includes("g")) {
      amountOfMoves = 1;
      moveQueen();
    }
    if (currentPosition.id.includes("f")) {
      amountOfMoves = 0;
      while (amountOfMoves < 2) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("e")) {
      amountOfMoves = 0;
      while (amountOfMoves < 3) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("d")) {
      amountOfMoves = 0;
      while (amountOfMoves < 4) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("c")) {
      amountOfMoves = 0;
      while (amountOfMoves < 5) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("a")) {
      amountOfMoves = 0;
      while (amountOfMoves < 6) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("a")) {
      amountOfMoves = 0;
      while (amountOfMoves < 7) {
        amountOfMoves = amountOfMoves + 1;
        moveQueen();
      }
    }

    if (currentPosition.id.includes("b")) {
      amountOfMoves = -1;
      moveQueen();
    }
    if (currentPosition.id.includes("c")) {
      amountOfMoves = 0;
      while (amountOfMoves > -2) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("d")) {
      amountOfMoves = 0;
      while (amountOfMoves > -3) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("e")) {
      amountOfMoves = 0;
      while (amountOfMoves > -4) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("f")) {
      amountOfMoves = 0;
      while (amountOfMoves > -5) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("g")) {
      amountOfMoves = 0;
      while (amountOfMoves > -6) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
    if (currentPosition.id.includes("h")) {
      amountOfMoves = 0;
      while (amountOfMoves > -7) {
        amountOfMoves = amountOfMoves - 1;
        moveQueen();
      }
    }
  }
  //Black Queen END

  //Calculates moves for white pawns
  if (
    currentPosition.classList.contains("white-pawn") &&
    !currentPosition.classList.contains("potential-move")
  ) {
    SelectedPiece = "white-pawn";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );

    //move forward
    const moveForwardPawn = () => {
      let newPosition = findPosition.number - amountOfMoves;
      let findnewPosition = SquaresData.find(
        (newSquare) => newSquare.number === newPosition
      );
      let newPositionId = findnewPosition.coordinates;
      let positionNew = document.getElementById(newPositionId);
      if (!positionNew.classList.contains("black-pawn")) {
        positionNew.classList.add("potential-move");
      } else {
        console.log("can't move forward");
      }
    };

    //capture pawns on diagonals
    const pawnsCapture = () => {
      let CapturePosition = findPosition.number - amountOfMoves;
      let findcapturePosition = SquaresData.find(
        (newSquare) => newSquare.number === CapturePosition
      );
      let capturePositionId = findcapturePosition.coordinates;
      let positionCapture = document.getElementById(capturePositionId);
      if (positionCapture.classList.contains("black-pawn")) {
        positionCapture.classList.add("potential-move");
      }
    };

    //Old position
    let oldPositionId = findPosition.coordinates;
    positionOld = document.getElementById(oldPositionId);

    //calling functions
    amountOfMoves = 8;
    moveForwardPawn();
    if (currentPosition.id.includes(2)) {
      amountOfMoves = 16;
      moveForwardPawn();
    }
    amountOfMoves = 9;
    pawnsCapture();
    amountOfMoves = 7;
    pawnsCapture();
  }
  // White pawn END

  //Actually moving the pieces
  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove("white-pawn");
    currentPosition.classList.remove("black-pawn");
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    SwitchTurnstest();
    CancelMove();
  }
};

export default CalculateMoves;
