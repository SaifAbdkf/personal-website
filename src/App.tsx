import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  window.onload = () => {
    setIsLoaded(true);
  };

  //in case website is opened in private mode and Javacript cannot access window.onLoad
  useEffect(() => {
    setTimeout(() => {
      if (!isLoaded) setIsLoaded(true);
    }, 600);
  }, [isLoaded]);

  return (
    <div className={`loader  ${isLoaded ? "loaded" : ""}`}>
      <Router>
        <div className="mainContainer">
          <div className="websiteView">
            <div className="headerContainer">
              <Header />
            </div>

            <div className="content">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
