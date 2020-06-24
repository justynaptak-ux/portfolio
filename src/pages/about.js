import React from "react"
import Layout from "../components/Layout"
import styles from "../components/style.css"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
`

const About = () => {
  const data = useStaticQuery(GetProfile)
  return (
    <Layout>
      <div className="aboutcontainer">
        <Image
          className="profilephoto"
          fluid={data.profile.childImageSharp.fluid}
        />
        <Image
          className="aboutme"
          fluid={data.coverphoto2.childImageSharp.fluid}
        ></Image>
        <p className="mystory">test</p>
      </div>
    </Layout>
  )
}

export default About
