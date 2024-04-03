import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-muted">
  <div className="container-fluid">

        <a class="nav-link"  >QScript Coffee <span class="sr-only"></span></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      </div>
    
    </div>
</nav>
    );
};

export default Navbar;