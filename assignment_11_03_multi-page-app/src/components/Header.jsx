import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: "10px", textAlign: "center", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px" }}>About</Link>
      <Link to="/contact" style={{ margin: "0 15px" }}>Contact</Link>
    </nav>
  );
}
