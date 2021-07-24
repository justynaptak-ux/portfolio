import React from "react";
import Image from "gatsby-image";
import "../components/style.css";
import { graphql, useStaticQuery } from "gatsby";

const GetExamples = graphql`
  {
    meditate: file(relativePath: { eq: "meditate.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    drzewa: file(relativePath: { eq: "drzewa.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    moderny: file(relativePath: { eq: "moderny.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    waymore: file(relativePath: { eq: "waymore.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    stumostow: file(relativePath: { eq: "stumostow.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    ota: file(relativePath: { eq: "ota.jpg" }) {
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
          fluid={data.meditate.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.figma.com/proto/BbrfQbKOPypM83BN9eSiC6/MEditate?node-id=588%3A55&scaling=min-zoom&page-id=0%3A1"
            >
              MEditate (Geek Girls Carrots Hackaton)
            </a>
          </h3>
          <br />
          Hackaton Geek Girls Carrots inspired by Sexify (Netflix series) was my biggest challenge so far. For the first time, I was able to 
          carry out the design process on my own, from creating a person, user flow to lo-fi prototypes to a finished project. 
           <br /><br />
           The great cooperation of our seven-person team resulted in this project, in which you can observe an amazing idea dressed in a beautiful graphic design.
          <br /> <br />
          <a
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/BbrfQbKOPypM83BN9eSiC6/MEditate?node-id=588%3A55&scaling=min-zoom&page-id=0%3A1"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.moderny.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.figma.com/proto/prDd3irNXjxALjVSeXHRpw/JustynaPtakProjektksi%C4%85%C5%BCki?node-id=22%3A27&scaling=min-zoom&page-id=0%3A1"
            >
              Moderny
            </a>
          </h3>
          <br />
          One of the recruitment tasks I did was a one-page website promoting the sale of a book of my choice. Due to the sentiment I have for nature, I chose "The Secret Life of Trees".
           <br /><br />
           I wanted the design to reflect the mood of the book and to present its content to the user in a simple and intuitive way.
          <br /> <br />
          <a
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/TdkAZEslP1Cb6nROEkhY5M/moderny?node-id=25%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=25%3A2"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.drzewa.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.figma.com/proto/prDd3irNXjxALjVSeXHRpw/JustynaPtakProjektksi%C4%85%C5%BCki?node-id=22%3A27&scaling=min-zoom&page-id=0%3A1"
            >
              Sekretne Życie Drzew (non-comercial project)
            </a>
          </h3>
          <br />
          One of the recruitment tasks I did was a one-page website promoting the sale of a book of my choice. Due to the sentiment I have for nature, I chose "The Secret Life of Trees".
           <br /><br />
           I wanted the design to reflect the mood of the book and to present its content to the user in a simple and intuitive way.
          <br /> <br />
          <a
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/prDd3irNXjxALjVSeXHRpw/JustynaPtakProjektksi%C4%85%C5%BCki?node-id=22%3A27&scaling=min-zoom&page-id=0%3A1"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.waymore.childImageSharp.fluid}
        ></Image>
        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
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
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/Z97Gpe4gtgMGRI0ZXxYgiH/Waymore-Portfolio?node-id=1%3A4&scaling=min-zoom"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      
      <div className="example">
        <Image
          className="image"
          fluid={data.ota.childImageSharp.fluid}
        ></Image>

        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.figma.com/proto/mqFQ7gUbdMdnq8rkFFXQac/OTA?node-id=3%3A11&scaling=min-zoom&page-id=0%3A1"
            >
              OTA Insight Design System
            </a>
          </h3>
          <br />
          During my summer internship at the Belgian branch of OTA Insight, my main task was to create a Design System. A month of hard work and research resulted in comprehensive implementation of this task. With the help of the ZeroHeight tool, I created the information architecture and implemented components created together with the team members. The Design System is updated and used daily in the company.
           <br /><br />
           At the same time, I would like to present the whole effect during the discussion regarding cooperation. Due to the type of contract, the Figma project available in the portfolio contains only parts of the entire system.
          <br /> <br />
          <a
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/mqFQ7gUbdMdnq8rkFFXQac/OTA?node-id=3%3A11&scaling=min-zoom&page-id=0%3A1"
          >
            <h6>Check out my Figma project</h6>
          </a>
        </div>
      </div>
      <div className="example">
        <Image
          className="image"
          fluid={data.stumostow.childImageSharp.fluid}
        ></Image>

        <div className="description">
          <h3>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.figma.com/proto/HiUUu0OCLpcoyhQf1ZtW1U/100-most%C3%B3w?node-id=139%3A6&scaling=min-zoom&page-id=0%3A1"
            >
              Browar Stu Mostów (redesign)
            </a>
          </h3>
          <br />
          During my half-year job in the Brewery's marketing department, I took the time to do a gentle redesign of the home page. The goal was to change the information architecture with the least amount of money, and in the shortest amount of time. 
         <br /><br />
           The original is available at this address: https://100mostow.pl/
          <br /> <br />
          <a
            target="_blank" rel="noreferrer"
            href="https://www.figma.com/proto/HiUUu0OCLpcoyhQf1ZtW1U/100-most%C3%B3w?node-id=139%3A6&scaling=min-zoom&page-id=0%3A1"
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
              target="_blank" rel="noreferrer"
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
