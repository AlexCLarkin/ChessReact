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
  if (
    currentPosition.classList.contains("black-pawn") &&
    !currentPosition.classList.contains("potential-move")
  ) {
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

    if (!positionNew.classList.contains("white-pawn")) {
      positionNew.classList.add("potential-move");
    } else {
      console.log("can't move forward");
    }
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
    if (down1 < 63) {
      let findDown1 = SquaresData.find(
        (newSquare) => newSquare.number === down1
      );
      let down1Id = findDown1.coordinates;
      let Down1 = document.getElementById(down1Id);
      Down1.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down2 = findPosition.number + 16;
    if (down2 < 63) {
      let findDown2 = SquaresData.find(
        (newSquare) => newSquare.number === down2
      );
      let down2Id = findDown2.coordinates;
      let Down2 = document.getElementById(down2Id);
      Down2.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down3 = findPosition.number + 24;
    if (down3 < 63) {
      let findDown3 = SquaresData.find(
        (newSquare) => newSquare.number === down3
      );
      let down3Id = findDown3.coordinates;
      let Down3 = document.getElementById(down3Id);
      Down3.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down4 = findPosition.number + 32;
    if (down4 < 63) {
      let findDown4 = SquaresData.find(
        (newSquare) => newSquare.number === down4
      );
      let down4Id = findDown4.coordinates;
      let Down4 = document.getElementById(down4Id);
      Down4.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down5 = findPosition.number + 40;
    if (down5 < 63) {
      let findDown5 = SquaresData.find(
        (newSquare) => newSquare.number === down5
      );
      let down5Id = findDown5.coordinates;
      let Down5 = document.getElementById(down5Id);
      Down5.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down6 = findPosition.number + 48;
    if (down6 < 63) {
      let findDown6 = SquaresData.find(
        (newSquare) => newSquare.number === down6
      );
      let down6Id = findDown6.coordinates;
      let Down6 = document.getElementById(down6Id);
      Down6.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    let down7 = findPosition.number + 56;
    if (down7 < 63) {
      let findDown7 = SquaresData.find(
        (newSquare) => newSquare.number === down7
      );
      let down7Id = findDown7.coordinates;
      let Down7 = document.getElementById(down7Id);
      Down7.classList.add("potential-move");
    } else {
      console.log("can't move down");
    }

    //Up Movement
    let up1 = findPosition.number - 8;
    if (up1 > -1) {
      let findUp1 = SquaresData.find((newSquare) => newSquare.number === up1);
      let up1Id = findUp1.coordinates;
      let Up1 = document.getElementById(up1Id);
      Up1.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up2 = findPosition.number - 16;
    if (up2 > -1) {
      let findUp2 = SquaresData.find((newSquare) => newSquare.number === up2);
      let up2Id = findUp2.coordinates;
      let Up2 = document.getElementById(up2Id);
      Up2.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up3 = findPosition.number - 24;
    if (up3 > -1) {
      let findUp3 = SquaresData.find((newSquare) => newSquare.number === up3);
      let up3Id = findUp3.coordinates;
      let Up3 = document.getElementById(up3Id);
      Up3.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up4 = findPosition.number - 32;
    if (up4 > -1) {
      let findUp4 = SquaresData.find((newSquare) => newSquare.number === up4);
      let up4Id = findUp4.coordinates;
      let Up4 = document.getElementById(up4Id);
      Up4.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up5 = findPosition.number - 40;
    if (up5 > -1) {
      let findUp5 = SquaresData.find((newSquare) => newSquare.number === up5);
      let up5Id = findUp5.coordinates;
      let Up5 = document.getElementById(up5Id);
      Up5.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up6 = findPosition.number - 48;
    if (up6 > -1) {
      let findUp6 = SquaresData.find((newSquare) => newSquare.number === up6);
      let up6Id = findUp6.coordinates;
      let Up6 = document.getElementById(up6Id);
      Up6.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    let up7 = findPosition.number - 56;
    if (up7 > -1) {
      let findUp7 = SquaresData.find((newSquare) => newSquare.number === up7);
      let up7Id = findUp7.coordinates;
      let Up7 = document.getElementById(up7Id);
      Up7.classList.add("potential-move");
    } else {
      console.log("cant move up");
    }

    //Left Movement
    let left1 = findPosition.number - 1;
    if (left1 < 63) {
      let findLeft1 = SquaresData.find(
        (newSquare) => newSquare.number === left1
      );
      let left1Id = findLeft1.coordinates;
      let Left1 = document.getElementById(left1Id);
      Left1.classList.add("potential-move");
    } else {
      console.log("can't move left");
    }

    let left2 = findPosition.number - 2;
    if (left2 < 63) {
      let findLeft2 = SquaresData.find(
        (newSquare) => newSquare.number === left2
      );
      let left2Id = findLeft2.coordinates;
      let Left2 = document.getElementById(left2Id);
      Left2.classList.add("potential-move");
    } else {
      console.log("can't move left");
    }

    //Old Position
    let oldPositionId = findPosition.coordinates;
    positionOld = document.getElementById(oldPositionId);
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

    if (!positionNew.classList.contains("black-pawn")) {
      positionNew.classList.add("potential-move");
    } else {
      console.log("can't move forward");
    }

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
