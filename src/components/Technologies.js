import React from "react";
import "../components/style.css";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";



const GetIcons = graphql`
  {
    html: file(relativePath: { eq: "html5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    css: file(relativePath: { eq: "css.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    javascript: file(relativePath: { eq: "javascript.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    react: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    node: file(relativePath: { eq: "node.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    figma: file(relativePath: { eq: "figma.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    vscode: file(relativePath: { eq: "vscode.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Technologies = () => {
  const data = useStaticQuery(GetIcons);
  return (
    <div>
      <section className="sections">web development</section>
      <div className="technologies">
        <p>
          During this year I learned many useful digital solutions. Starting
          with programming languages ​​and ending with graphic programs. I am
          familiar with technologies such as:
        </p>
        <div className="technologiesbox">
          <Image className="circle" fluid={data.html.childImageSharp.fluid} />
          <Image className="circle" fluid={data.css.childImageSharp.fluid} />
          <Image
            className="circle"
            fluid={data.javascript.childImageSharp.fluid}
          />
          <Image className="circle" fluid={data.react.childImageSharp.fluid} />
          <Image className="circle" fluid={data.gatsby.childImageSharp.fluid} />
          <Image className="circle" fluid={data.node.childImageSharp.fluid} />
          <Image className="circle" fluid={data.github.childImageSharp.fluid} />
          <Image className="circle" fluid={data.vscode.childImageSharp.fluid} />
          <Image className="circle" fluid={data.figma.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
