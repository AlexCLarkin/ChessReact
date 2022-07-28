const CancelMove = () => {
  let chessBoard = document.querySelectorAll(".chess-square");
  chessBoard.forEach((square) => square.classList.remove("potential-move"));
};

export default CancelMove;
