import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
