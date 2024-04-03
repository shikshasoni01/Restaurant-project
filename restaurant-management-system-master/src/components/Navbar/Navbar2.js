import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = (props) => {


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <a className="nav-link" style={{ marginLeft: "20px" }}>
      QScript Coffee <span className="sr-only"></span>
      </a>
      
      <Link className="btn btn-primary mx-4" to="/aboutus" role="button">
        About Us
      </Link>
      <Link className="btn btn-primary mx-1" to="/contactus" role="button">
        Contact Us
      </Link>
      <Link className="btn btn-primary mx-4" to="/Menu" role="button">
        <b>Menu </b>
      </Link>
      
    </nav>
  );
};

export default Navbar2;
