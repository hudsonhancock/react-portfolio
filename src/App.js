import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

// From net ninja
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mywork" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
