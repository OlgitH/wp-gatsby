import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#000',
      marginBottom: `1.45rem`,
      padding: `1rem 0`
    }}
  >
    <div className="container">
        <div className="row">

            <div className="col-md-6">
              <h3 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
              </h3>
            </div>

            <div className="col-md-6">
            <Navigation />
            </div>

        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
