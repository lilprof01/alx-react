import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="App-header">
      <img src={require("../assets/ALX_logo.jpg")} alt="ALX logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
