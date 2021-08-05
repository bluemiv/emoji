import React from "react"
import PropTypes from "prop-types"

function Footer() {
  return (
    <footer role="footer">
      Emoji Set © {new Date().getFullYear()} Created by bluemiv
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
