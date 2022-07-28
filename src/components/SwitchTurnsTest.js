import App from "./App";
import Turns from "./Turns";

const SwitchTurnstest = () => {
  if (App.WhitesTurn === true) {
    App.WhitesTurn = false;
    console.log(App.WhitesTurn);
    Turns();
  } else if (App.WhitesTurn === false) {
    App.WhitesTurn = true;
    console.log(App.WhitesTurn);
    Turns();
  }
};

export default SwitchTurnstest;
