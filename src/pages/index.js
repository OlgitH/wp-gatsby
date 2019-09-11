import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap-grid.min.css"



const IndexPage = ({data}) => (
<div>
    <Img fluid={data.wordpressPage.featured_media.localFile.childImageSharp.fluid}/>
    <Layout>

        <SEO title="Home" />
        <Section
        className="indexStyles.introSection"
        bgColor="#fff"
        textColor="#000"
        >
            <div className="container">
                <h1>{data.wordpressPage.title}</h1>
                <p>{data.wordpressPage.acf.intro}</p>
            </div>
        </Section>

        <Section
        className="indexStyles.sectionOne"
        bgColor="#f6f6f6"
        textColor="#000"
        >
            <div className="container">
            {data.wordpressPage.acf.section_one}
            </div>
        </Section>
        <Section
        className="indexStyles.sectionTwo"
        bgColor="coral"
        textColor="#fff"
        >
            <div className="container">
            {data.wordpressPage.acf.section_two}
            </div>
        </Section>

    </Layout>
</div>
)

export default IndexPage

export const IndexQuery = graphql`
query {
  wordpressPage(title: {eq: "Homepage"}) {
    id
    title
    acf {
      intro
      section_one
      section_two
    }
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
