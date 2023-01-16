import React, { useState, useEffect } from "react";
import "./Nabar.css";
export default function Nabar() {
  return (
    <nav>
      <ul className="list">
        <li className="items">Accueil</li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
      </ul>
      <button className="btn">BTN</button>
    </nav>
  );
}
