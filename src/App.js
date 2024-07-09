import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import Results from "./Classes/Results";

function App() {
  let kumar = new Results("kumar",45,88,66,44,22,55);
  let ramesh =new Results("ramesh",88,99,55,66,44,77);
  let james = new Results("james",56,88,99,88,77,66);
  james.yourResult()
  kumar.yourResult()
  ramesh.yourResult()
  return (
    <div className="App">
      <Player
        link="./images/jbr.png"
        team="RR"
        str="158.56"
        avg="49.6"
      ></Player>
      <Player
        link="./images/klsn.png"
        team="SRH"
        str="183.3"
        avg="53.2"
      ></Player>
      <Player
        link="./images/dre.png"
        team="KKR"
        str="187.38"
        avg="46.2"
      ></Player>
    </div>
  );
}

export default App;
