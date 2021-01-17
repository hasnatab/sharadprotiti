import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>Sharad Protiti</h1>

      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Music</a>
        </li>
        <li>
          <a href="">Art</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li className="login-button">
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
