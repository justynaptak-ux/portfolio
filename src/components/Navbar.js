import React from "react"
import { Link } from "gatsby"
import styles from "../components/navbar.css"

const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>

        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
