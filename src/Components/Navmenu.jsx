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
              <a href="/About">About Me</a>
            </li>
            <li>
              <a href="/ContactMe">Work with me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
