import React from "react"
import  "../components/style.css"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const GetImages = graphql`
  {
    cover: file(relativePath: { eq: "coverphoto.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Cover = () => {
  const data = useStaticQuery(GetImages)
  return (
    <div>
      <Image className="mainphoto" fluid={data.cover.childImageSharp.fluid} />
      <h1 className="mainsentence">
        Hi, my name is Justyna, <br /> and I am deeply interested in user
        experience <br />
        and catching moment with my camera, based in Wrocław, Poland
      </h1>
      <h2 className="coordinates">17°02′E, 51°06′N</h2>
    </div>
  )
}

export default Cover
