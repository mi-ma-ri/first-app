import "./App.css";
import Header from "./Header";
import Centerpage from "./Centerpage";
import Statement from "./Statement";
import Footer from "./Footer";

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
