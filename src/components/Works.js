import React from "react";
import Image from "gatsby-image";
import "../components/style.css";
import { graphql, useStaticQuery } from "gatsby";

const GetExamples = graphql`
  {
    waymore: file(relativePath: { eq: "waymore.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    seus: file(relativePath: { eq: "seus.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    casino: file(relativePath: { eq: "casino.jpg" }) {
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
            <a
              target="_blank"
              href="https://www.figma.com/proto/Z97Gpe4gtgMGRI0ZXxYgiH/Waymore-Portfolio?node-id=0%3A1&scaling=min-zoom"
            >
              1. Waymore
            </a>
          </h3>
          <br />
          Waymore is a vision of a creative collective initiated by my friend.
          He invited me to co-create it, starting from making a website
          prototype. He provided me with the logo and the desired colors, which
          I based on in this project. My goal was to create a clear website,
          thanks to which the client would quickly understand what is hidden
          under the name "creative collective". The challenge for me was the
          neon colours, which I had not used before.
          <br /> <br />
          <a
            target="_blank"
            href="https://www.figma.com/proto/Z97Gpe4gtgMGRI0ZXxYgiH/Waymore-Portfolio?node-id=1%3A4&scaling=min-zoom"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.seus.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a
              target="_blank"
              href="https://www.figma.com/proto/M2fw2LihoQYhE0y7FzET28/SEUS-Portfolio?node-id=0%3A1&scaling=min-zoom"
            >
              2. SEUS
            </a>
          </h3>
          <br />
          SEUS is a Wroclaw-based company with 10 years of experience in the SEO
          industry. The first challenge was just to get to know how positioning
          works, because I had little idea about it. For the first time I faced
          the cooperation with a client, an attempt to understand through a
          marketing brief what feelings the website is supposed to evoke and an
          attempt to change an older version of the website for a new one.
          <br /> <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/proto/sxRcQKsyXyS9B4HTBtaU9Q/seus-v3?node-id=46%3A203&scaling=min-zoom"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.casino.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/proto/sLBtAKpy23JnQZrfInV4BR/Untitled?node-id=187%3A12&scaling=min-zoom"
          >
            <h3>3. Casino del Papel</h3>
          </a>
          <br />
          During the Coderscamp, I've been doing the look of every project. I
          was the only person who was interested in it, so I was happy to take
          on more tasks. However, it was special for me because the
          recommendation for this one was to create a site to play two games.
          The rest of the teams came up with BlackJack and Saper and I wanted to
          make these basic games more attractive. It wasn't easy, because... I
          never played games. That's how Casino de Papel was created, inspired
          by the story of the famous Netflix series. <br /> <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/proto/sLBtAKpy23JnQZrfInV4BR/Untitled?node-id=187%3A12&scaling=min-zoom"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
