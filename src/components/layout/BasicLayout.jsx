import React from "react"
import PropTypes from "prop-types"

import Seo from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import "../../assets/index.css"
import Side from "./Side"

function BasicLayout(props) {
  return (
    <>
      <Seo
        title="Emoji Set 이모지 모음"
        description="Easily copy and paste emojis."
      />
      <div className="basic-layout-container">
        <Side title="😆 Emoji Set" />
        <div>
          <Header />

          <main>main</main>
          <Footer>footer</Footer>
        </div>
      </div>
    </>
  )
}

BasicLayout.propTypes = {}

export default BasicLayout
