import React from "react";

function Toolbar(props) {
  return (
    <div className="toolbar">
      <h5>Opcije teksta</h5>
      <div className="toolbar-wrapper">
        <button className="toolbar-item">B</button>
        <button className="toolbar-item">I</button>
        <button className="toolbar-item">U</button>
        <button className="toolbar-item">H1</button>
      </div>
      <h5>Izaberi seriju</h5>
      <div className="toolbar-wrapper">
        <input />
      </div>
      <h5>Izaberi seriju</h5>
    </div>
  );
}

export default Toolbar;
