import React from "react"
import Layout from "../components/Layout"
import Cover from "../components/Cover"
import Works from "../components/Works"
import Technologies from "../components/Technologies"
import Photos from "../components/Photos"

export default () => (
  <Layout>
    <Cover />
    <main className="margincontainer">
      <Works />
      <Technologies />
      <Photos />
    </main>
  </Layout>
)
