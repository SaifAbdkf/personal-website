import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./App.css"; // Import styles

function App() {
  return (
    <div>
      <h1>React Dark Mode Toggle</h1>
      <ThemeToggle />
      <p>Click the button to toggle between Light and Dark Mode.</p>
    </div>
  );
}

export default App;
