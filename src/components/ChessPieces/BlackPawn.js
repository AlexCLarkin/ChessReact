import React from "react";

const BlackPawn = () => {
  SelectedPiece = "black-pawn";
  console.log("Selected piece:" + SelectedPiece);

  let findPosition = SquaresData.find(
    (currentSquare) => currentSquare.coordinates === currentPosition.id
  );
  newPosition = findPosition.number + 8;
  let findnewPosition = SquaresData.find(
    (newSquare) => newSquare.number === newPosition
  );

  extraPosition = findPosition.number + 16;
  let findextraPosition = SquaresData.find(
    (newSquare) => newSquare.number === extraPosition
  );

  CapturePositionR = findPosition.number + 9;
  let findcapturePositionR = SquaresData.find(
    (newSquare) => newSquare.number === CapturePositionR
  );

  CapturePositionL = findPosition.number + 7;
  let findcapturePositionL = SquaresData.find(
    (newSquare) => newSquare.number === CapturePositionL
  );

  let newPositionId = findnewPosition.coordinates;
  let oldPositionId = findPosition.coordinates;
  let extraPositionId = findextraPosition.coordinates;
  let capturePositionIdR = findcapturePositionR.coordinates;
  let capturePositionIdL = findcapturePositionL.coordinates;

  console.log("bozo" + newPositionId);
  let positionNew = document.getElementById(newPositionId);
  positionOld = document.getElementById(oldPositionId);
  let positionExtra = document.getElementById(extraPositionId);
  let positionCaptureR = document.getElementById(capturePositionIdR);
  let positionCaptureL = document.getElementById(capturePositionIdL);

  positionNew.classList.add("potential-move");
  if (
    currentPosition.id === "a7" ||
    currentPosition.id === "b7" ||
    currentPosition.id === "c7" ||
    currentPosition.id === "d7" ||
    currentPosition.id === "e7" ||
    currentPosition.id === "f7" ||
    currentPosition.id === "g7" ||
    currentPosition.id === "h7"
  ) {
    positionExtra.classList.add("potential-move");
  }

  if (positionCaptureR.classList.contains("white-pawn")) {
    positionCaptureR.classList.add("potential-move");
  }

  if (positionCaptureL.classList.contains("white-pawn")) {
    positionCaptureL.classList.add("potential-move");
  }
};

export default BlackPawn;
