import "./App.css";
import Header from "./Header";
import Centerpage from "./Centerpage";
import Statement from "./Statement";

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 50,
  };
  return (
    <div className="App">
      <Header />
      <div style={style}>
        <Centerpage />
        <Statement />
      </div>
    </div>
  );
}

export default App;
