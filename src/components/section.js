import React from "react"
import sectionStyles from "../styles/section.module.scss"

const Section = ({bgColor, textColor, children}) => (
  <section style={{backgroundColor:bgColor, color: textColor}} className={sectionStyles.section}>
  {children}
  </section>
)

export default Section
