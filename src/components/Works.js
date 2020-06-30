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
      <section className="sections">projects</section>
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
              Waymore
            </a>
          </h3>
          <br />
          Waymore is a company founded by a friend, whose vision is to build a creative collective.
          I was invited to co-create it by building it's website
          prototype. For this, I was provided with the logotype and the colors palette as a base.
           <br /><br />
          My goal was to create a clear, easy to navigate website, through which the client would quickly understand what hides
          under the name "creative collective". The neon colors were the biggest challenge since I haven't used them before.
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
              SEUS
            </a>
          </h3>
          <br />
          SEUS is a Wroclaw-based company with 10 years of experience in the SEO
          industry. I was asked to re-design their website.
          It was my first fully professional experience.  <br /><br />

          The first challenge was to understand how web positioning
          works, which was really interesting. It was also the first time I "faced the client"  to understand what his expectations are
           and what feelings the website is supposed to evoke.
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
            <h3>Casino del Papel (bootcamp project)</h3>
          </a>
          <br />
          During "Coderscamp", I've done the visuals for every project I was involved in. I
          was the only one interested in UX/UI (and not only web development), so I was happy to take
          on more tasks.
           <br /><br />

           This particular project was very special - we had to create a site to play two games.
          The rest of the team came up with BlackJack and Saper and I wanted to
          make these basic games more attractive. It wasn't easy, since I've
          never played any games. That's how "Casino del Papel" was created, inspired
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
