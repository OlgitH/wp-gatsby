import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  color:`#fff`,
  textDecoration: `none`,
  marginRight: '1rem',
}
const Navigation = () => (
  <nav>
    <Link style={linkStyle} to="/events/">Events</Link>
  </nav>
)

export default Navigation
