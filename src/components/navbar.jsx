import React from "react";

//Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <navbar className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </navbar>
  );
};

export default NavBar;
