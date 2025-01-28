import React from "react";

export default function Navmenu() {
  return (
    <>
      <div className="container-menu">
        <div className="nav-menu">
          <ul className="menu">
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Work&Me">Work with me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
