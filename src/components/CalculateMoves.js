import react from "react";
import CancelMove from "./CancelMove";
import SquaresData from "./CreateSquaresData";
import SwitchTurnstest from "./SwitchTurnsTest";

var SelectedPiece;
var positionOld;

const CalculateMoves = (event) => {
  var currentPosition = event.target;
  var newPosition;
  var extraPosition;
  var CapturePositionR;
  var CapturePositionL;

  //cancel move
  if (!currentPosition.classList.contains("potential-move")) {
    CancelMove();
  }

  //Calculates potential moves for black pawns
  if (currentPosition.classList.contains("black-pawn")) {
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
  }
  //Black pawn END

  //Black Queen's movement
  if (currentPosition.classList.contains("black-queen")) {
    SelectedPiece = "black-queen";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );

    //Downward Movement
    let down1 = findPosition.number + 8;
    let findDown1 = SquaresData.find((newSquare) => newSquare.number === down1);
    let down1Id = findDown1.coordinates;
    let Down1 = document.getElementById(down1Id);
    Down1.classList.add("potential-move");

    let down2 = findPosition.number + 16;
    let findDown2 = SquaresData.find((newSquare) => newSquare.number === down2);
    let down2Id = findDown2.coordinates;
    let Down2 = document.getElementById(down2Id);
    Down2.classList.add("potential-move");

    let down3 = findPosition.number + 24;
    let findDown3 = SquaresData.find((newSquare) => newSquare.number === down3);
    let down3Id = findDown3.coordinates;
    let Down3 = document.getElementById(down3Id);
    Down3.classList.add("potential-move");

    let down4 = findPosition.number + 32;
    let findDown4 = SquaresData.find((newSquare) => newSquare.number === down4);
    let down4Id = findDown4.coordinates;
    let Down4 = document.getElementById(down4Id);
    Down4.classList.add("potential-move");

    let down5 = findPosition.number + 40;
    let findDown5 = SquaresData.find((newSquare) => newSquare.number === down5);
    let down5Id = findDown5.coordinates;
    let Down5 = document.getElementById(down5Id);
    Down5.classList.add("potential-move");

    let down6 = findPosition.number + 48;
    let findDown6 = SquaresData.find((newSquare) => newSquare.number === down6);
    let down6Id = findDown6.coordinates;
    let Down6 = document.getElementById(down6Id);
    Down6.classList.add("potential-move");

    let down7 = findPosition.number + 56;
    let findDown7 = SquaresData.find((newSquare) => newSquare.number === down7);
    let down7Id = findDown7.coordinates;
    let Down7 = document.getElementById(down7Id);
    Down7.classList.add("potential-move");

    //Upwards Movement
    let up1 = findPosition.number - 8; //THIS LINE IS THE ISSUE
    let findUp1 = SquaresData.find((newSquare) => newSquare.number === up1);
    let up1Id = findUp1.coordinates;
    let Up1 = document.getElementById(up1Id);
    Up1.classList.add("potential-move");

    //Old Position
    let oldPositionId = findPosition.coordinates;
    positionOld = document.getElementById(oldPositionId);
  }
  //Black Queen END

  //Calculates moves for white pawns
  if (currentPosition.classList.contains("white-pawn")) {
    SelectedPiece = "white-pawn";
    console.log("Selected piece:" + SelectedPiece);

    let findPosition = SquaresData.find(
      (currentSquare) => currentSquare.coordinates === currentPosition.id
    );
    newPosition = findPosition.number - 8;
    let findnewPosition = SquaresData.find(
      (newSquare) => newSquare.number === newPosition
    );

    extraPosition = findPosition.number - 16;
    let findextraPosition = SquaresData.find(
      (newSquare) => newSquare.number === extraPosition
    );

    CapturePositionR = findPosition.number - 7;
    let findcapturePositionR = SquaresData.find(
      (newSquare) => newSquare.number === CapturePositionR
    );

    CapturePositionL = findPosition.number - 9;
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
      currentPosition.id === "a2" ||
      currentPosition.id === "b2" ||
      currentPosition.id === "c2" ||
      currentPosition.id === "d2" ||
      currentPosition.id === "e2" ||
      currentPosition.id === "f2" ||
      currentPosition.id === "g2" ||
      currentPosition.id === "h2"
    ) {
      positionExtra.classList.add("potential-move");
    }

    if (positionCaptureR.classList.contains("black-pawn")) {
      positionCaptureR.classList.add("potential-move");
    }

    if (positionCaptureL.classList.contains("black-pawn")) {
      positionCaptureL.classList.add("potential-move");
    }
  }
  // White pawn END

  //Actually Moving the pieces
  if (currentPosition.classList.contains("potential-move")) {
    currentPosition.classList.remove("potential-move");
    positionOld.classList.remove(SelectedPiece);
    currentPosition.classList.add(SelectedPiece);
    SwitchTurnstest();
    CancelMove();
  }
};

export default CalculateMoves;
