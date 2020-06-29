import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import "../components/style.css";

const GetImages = graphql`
  {
    projector1: file(relativePath: { eq: "projector1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    projector2: file(relativePath: { eq: "projector2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    projector3: file(relativePath: { eq: "projector3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    basia: file(relativePath: { eq: "basia.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    winetu: file(relativePath: { eq: "winetu.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    grzanka: file(relativePath: { eq: "grzanka.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    asia: file(relativePath: { eq: "asia.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    stolik: file(relativePath: { eq: "stolik.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    palmiarnia: file(relativePath: { eq: "palmiarnia.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Photos = () => {
  const data = useStaticQuery(GetImages);
  return (
    <div>
      <section className="sections">photography</section>
      <div className="photography">
        <p>
          I bought my first camera a year and a half ago. The following works
          are the result of my self-study. I work with Canon 550d camera and
          Yongnuo 35mm lens.
        </p>
        <div className="photocontainer">
          <div className="photos">
            <Image
              className="photoitem1"
              fluid={data.projector2.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem1"
              fluid={data.projector1.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem1"
              fluid={data.projector3.childImageSharp.fluid}
            ></Image>
          </div>
          <div className="photos">
            <Image
              className="photoitem2"
              fluid={data.grzanka.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem2"
              fluid={data.basia.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem2"
              fluid={data.winetu.childImageSharp.fluid}
            ></Image>
          </div>
          <div className="photos">
            <Image
              className="photoitem"
              fluid={data.asia.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem"
              fluid={data.stolik.childImageSharp.fluid}
            ></Image>
            <Image
              className="photoitem"
              fluid={data.palmiarnia.childImageSharp.fluid}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
