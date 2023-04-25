import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {


  return (
    <div className={"Nav"}>
      <div className={"nav-text"}>All Things Related to the Web</div>
      <Link to="/"><button className="nav-button"> Home </button></Link>
      <Link to="/new"><button className="nav-button"> New Post </button></Link>
    </div>
  );
};

export default NavBar;