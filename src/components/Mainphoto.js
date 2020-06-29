import React from "react";
import "../components/style.css";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const getCover = graphql`
  {
    cover: file(relativePath: { eq: "coverphoto.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Background = () => {
  const data = useStaticQuery(getCover);
  console.log(data);
  return (
    <div>
      <BackgroundImage
        className="background"
        fluid={data.cover.childImageSharp.fluid}
      >
        <div className="mainsentence">
          <b>
            Hi, I am Justyna, <br /> junior UX/UI designer  <br /> interested in web development <br />
            and catching moments with a camera. <br /> Based in Wrocław, Poland
          </b>
          <div className="coordinates">17°02′E, 51°06′N</div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Background;

// export const pageQuery = graphql`
// query {
//     indexImage: file{relativePath: { eq: "coverphoto.jpeg" }} {
//         childImageSharp {
//             fluid(max-width: 1800) {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }

// }
// `;
