 import React from "react"
 import img from "../images/coverphoto.jpeg"
 import Image from "gatsby-image"
 import styles from "../components/style.css"
 import { graphql, useStaticQuery } from "gatsby"

 const getImages = graphql`
   {
     cover: file(relativePath: { eq: "coverphoto.jpeg" }) {
       childImageSharp {
         fluid {
           ...GatsbyImageSharpFluid
         }
       }
     }
     profile: file(relativePath: { eq: "profile.jpg" }) {
       childImageSharp {
         fluid {
           ...GatsbyImageSharpFluid
         }
       }
     }
   }
 `

 const Images = () => {
   const data = useStaticQuery(getImages)
   console.log(data)
   return (
     <section className="images">
       <article className="singleimage">
         <img src={img} width="100%" height="100%" />
       </article>
       <article className="singleimage">
         <Image fluid={data.cover.childImageSharp.fluid} />
       </article>
       <article className="singleimage">
         <Image fluid={data.profile.childImageSharp.fluid} />
       </article>
     </section>
   )
 }

 export default Images
