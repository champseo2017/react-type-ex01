import React, { CSSProperties } from "react";

function App() {
  // A better practice is to define styles in a separate constant:
  const buttonStyles: CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none",
  };
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
