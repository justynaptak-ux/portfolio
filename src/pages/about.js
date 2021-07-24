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
          <br /> If I were to give you a minimalistic answer - a
          critical and open mind. There is always a "why" behind everything I do and learn.

          <br /> <br />
          I am a cook by education,
          and my specialty is vegan cuisine. When I cook, the recipes are only an inspiration
          for me. I love to experiment and I try to improve them using my own experience.
           <br /> <br />

          I only discovered UX Design in mid 2019. I really wanted to
          change something in my life by finding a profession which is both creative and useful.
          So when I understood what UX Designer was all about, my intuition
          pushed me in this direction. Learning more and solving new, ever more complex issues during
          various courses gave me great satisfaction. I feel truly excited about my
          future career.

          <br /> <br /> In parallel I have been learning about digital photography,
          devoting almost every free moment to it. Through photos I try to show
          people the world from my perspective. I am passionate about it, because of the
          attention it has brought to my life and the motivation to focus more
          deeply on my surrounding. <br /> <br />

          I also love travelling. It try to take some time to
           travel small and large, which I almost need as much as oxygen.
           I love my home, but I try to take care of this
          need whenever possible. In every city I visit, I want to feel what the
          place has to offer and learn as much as possible about it, while
          avoiding the most famous tourist facilities. On the other hand, spending time in
          nature taught me to relax in a new way, which in other
          conditions is almost impossible.

          <br /> <br /> Other (and there aren't that many) moments I spend on
          learning new things. My latest discoveries are riding longboard and
          playing djembe drum. I also try to improve my education in various fields
          of knowledge, using popular science books. It helps me to
          better understand how this world works.
          <br />
          <br />
          <h3>
            Check out my profile on
            {" "}
            <a href="https://www.linkedin.com/in/justyna-ptak-ux/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {" "}
            or get my
            {" "}
            <a href={CV} target="_blank" rel="noreferrer"> 
              CV
            </a>.
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default About;
