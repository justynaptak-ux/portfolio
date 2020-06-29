import React from "react";
import Layout from "../components/Layout";
import "../components/style.css";
import Image from "gatsby-image";
import CV from "../documents/JustynaPtakCV.pdf";
import { graphql, useStaticQuery } from "gatsby";

const GetProfile = graphql`
  {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coverphoto2: file(relativePath: { eq: "coverphoto2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(GetProfile);
  return (
    <Layout>
      <div className="aboutcontainer">
        <Image
          className="profilephoto"
          fluid={data.profile.childImageSharp.fluid}
        />
        <div className="mystory">
          <h3>Who am I?</h3>
          <br /> If I were to shorten the answer to a minimalist form - a
          critical and open mind. Behind every thing I do and learn is the
          question "why?" To develop the topic a bit, I am a cook by education,
          and my specialty is plant cuisine. The recipes are only an inspiration
          for me, and I try to take care of the rest myself.
          <br /> <br /> I have been learning digital photography for a year now,
          devoting almost every free moment to it. Through photos I try to show
          people the world from my perspective. I love this passion for the
          attention it has brought to my life and the motivation to focus more
          deeply on my surroundings. <br /> <br />
          I discovered UX Design barely over a year ago. I really wanted to
          change something in my life and make my work creative and necessary.
          So when I understood what UX Designer was all about, my intuition
          pushed me in this direction. Going deeper into the next issues during
          the courses gave me great satisfaction and I feel excited about my
          future job. <br /> <br />
          It takes a lot of time for me to travel small and large, which I need
          almost like oxygen. I love my home, but I try to take care of this
          need whenever possible. In every city I visit, I want to feel the
          place it has to offer and learn as much as possible about it, while
          avoiding the most famous tourist facilities. Spending time in the
          nature I have learned to relax on a much deeper level, which in other
          conditions is almost impossible.
          <br /> <br /> Other (and there aren't that many) moments I spend on
          learning new things, my latest discoveries are riding a longboard and
          playing a djembe drum. I try to improve my education in various fields
          of knowledge with the help of popular science books, that allow me to
          better understand how this world works.
          <br />
          <br />
          <h3>
            Check out my profile on
            <a href="https://www.linkedin.com/in/justyna-ptak-ux/">
              {" "}
              LinkedIn{" "}
            </a>
            or my
            <a href={CV} download>
              CV
            </a>
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default About;
