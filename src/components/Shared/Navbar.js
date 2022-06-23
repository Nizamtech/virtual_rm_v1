import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <details>
        <summary>Agent Lead</summary>
        <Link to="/">Lead List</Link>
      </details>
    </>
  );
};

export default Navbar;
