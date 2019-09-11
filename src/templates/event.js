import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const EventTemplate = ({ data }) => (
  <div>
    <Img fluid={data.wordpressWpEvent.featured_media.localFile.childImageSharp.fluid}/>
    <Layout>
      <div className="container">
        <h1>{data.wordpressWpEvent.title}</h1>
        <span>{data.wordpressWpEvent.acf.date}</span>
        <span>{data.wordpressWpEvent.acf.time}</span>
        <p>{data.wordpressWpEvent.acf.description}</p>
      </div>
    </Layout>
  </div>

)

export default EventTemplate

export const query = graphql`
  query EventTemplate($id: String!) {
    wordpressWpEvent(id: {eq: $id}) {
      title
      acf {
        date
        time
        description
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
