import React from "react";
import Layout from "../components/Layout";
import Works from "../components/Works";
import Technologies from "../components/Technologies";
import Photos from "../components/Photos";
import Mainphoto from "../components/Mainphoto";

export default () => (
  <Layout>
    <Mainphoto />
    <main className="margincontainer">
      <Works />
      <Technologies />
      <Photos />
    </main>
  </Layout>
);
