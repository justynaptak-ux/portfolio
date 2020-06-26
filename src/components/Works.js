import React from "react";
import Image from "gatsby-image";
import "../components/style.css";
import { graphql, useStaticQuery } from "gatsby";

const GetExamples = graphql`
  {
    waymore: file(relativePath: { eq: "waymore.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    seus: file(relativePath: { eq: "seus.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    casino: file(relativePath: { eq: "casino.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Works = () => {
  const data = useStaticQuery(GetExamples);
  console.log(data);
  return (
    <div>
      <section className="sections">works</section>
      <div className="example">
        <Image
          className="image"
          fluid={data.waymore.childImageSharp.fluid}
        ></Image>

        <div className="description">
          <h3>
            <a href="https://www.figma.com/proto/7WJt1vaekucXoIg47bF3lh/Waymore?node-id=61%3A4&scaling=min-zoom">
              1. Waymore
            </a>
          </h3>
          <br /> Waymore is a creative collective created by my friend who
          invited me to co-create it. This model in Figma is my idea at the look
          of the future site, based on the colors, fonts and logos provided to
          me by Paweł. Working with neon, intensive colors was new for me.
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.seus.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a href="https://www.figma.com/proto/sxRcQKsyXyS9B4HTBtaU9Q/seus-v3?node-id=46%3A203&scaling=min-zoom">
              2. SEUS
            </a>
          </h3>
          <br />
          SEUS is a company dealing in website positioning. My task was to
          prepare a prototype based on the already existing logo and view of the
          previous version. This template was created on the basis of a
          marketing brief and conversations with the client. This is the third
          version of the layout prepared for one client.
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.casino.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <a href="https://www.figma.com/proto/sLBtAKpy23JnQZrfInV4BR/Untitled?node-id=187%3A12&scaling=min-zoom">
            <h3>3. Casino del Papel</h3>
          </a>
          <br />
          This is the third project that is part of the bootcamp in which I
          participated. My task was to come up with a form in which we can
          present a platform for playing two games - blackjack and sapper. The
          idea, content, colors and prototype was invented by me and the game
          came to fruition.
        </div>
      </div>
    </div>
  );
};

export default Works;
