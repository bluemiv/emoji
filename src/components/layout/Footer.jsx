import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout } from "antd"

const { Footer } = Layout

function FooterWrapper() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Emoji Set © {new Date().getFullYear()} Created by bluemiv
    </Footer>
  )
}

export default FooterWrapper
