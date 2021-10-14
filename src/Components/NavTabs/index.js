import React from "react";
// import "./style.css";
// import { Link, useLocation } from "react-router-dom";

function NavTabs(props) {
  
  // const location = useLocation();

  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.handlePageChange("Projects")}
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>


    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link
    //       to="/"
    //       className={location.pathname === "/" ? "nav-link active" : "nav-link"}
    //     >
    //       John Bentley
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Projects"
    //       className={
    //         location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
    //     >
    //       Projects
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Contact"
    //       className={
    //         location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    // </ul>
  )
}

export default NavTabs;
