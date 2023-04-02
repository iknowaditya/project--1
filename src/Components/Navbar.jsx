import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="b-name">
        <span>Product Hunt</span>
      </h1>
      <button className="btn" onClick={props.showUsers}>
        <span>Get Users</span>
      </button>
    </div>
  );
};

export default Navbar;
