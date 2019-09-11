import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const UlStyle = {
  marginLeft:'0'
}
const ListStyle = {
  listStyle:'none'
}

const Events = ({data}) => (
  <Layout>
    <SEO title="Events" />
    <div className="container">
        <h1>Events page</h1>

        <ul style={UlStyle}>
          {data.allWordpressWpEvent.edges.map(document => (
            <li key={document.node.id} style={ListStyle}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <span>{document.node.acf.date}</span>
              <p><b>{document.node.acf.description}</b></p>
            </li>
          ))}
        </ul>
    </div>


  </Layout>
)

export default Events

export const EventQuery = graphql`
query {
  allWordpressWpEvent {
    edges {
      node {
        id
        title
        acf {
          date
          time
          description
        }
      }
    }
  }
}
`
