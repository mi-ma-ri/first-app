import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import LinkPost from "./LinkPost";
import Centerpage from "./Centerpage";
import Footer from "./Footer";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Centerpage />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/LinkPost" element={<LinkPost />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
