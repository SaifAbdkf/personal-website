import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <div className="mainContainer">
        <div className="content">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
