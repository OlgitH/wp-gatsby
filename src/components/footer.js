import React from "react"
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const Style = {
  padding:'2rem 0'
}
const Footer = () => (
  <footer style={Style}>
      <div className="container">
        © {new Date().getFullYear()}, Oliver Berman
      </div>
  </footer>
)

export default Footer
