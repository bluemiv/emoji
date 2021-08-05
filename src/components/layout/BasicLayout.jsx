import React, { createContext, useState, useMemo } from "react"
import PropTypes from "prop-types"

import Seo from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import Side from "./Side"

import "../../assets/index.css"

export const BasicLayoutContext = createContext({
  sideToggle: true,
  setSideToggle: () => {},
})

function BasicLayout({ children }) {
  const [sideToggle, setSideToggle] = useState(true)

  const value = useMemo(
    () => ({ sideToggle, setSideToggle }),
    [sideToggle, setSideToggle]
  )

  return (
    <BasicLayoutContext.Provider value={value}>
      <Seo
        title="Emoji Set 이모지 모음"
        description="Easily copy and paste emojis."
      />
      <div className="basic-layout-container">
        <Side title="😆 Emoji Set" />
        <div
          className={`main-container ${
            sideToggle ? null : "main-container-fill"
          }`}
        >
          <Header />
          <main role="main" className="main-contents">
            {children}
          </main>
          <Footer>footer</Footer>
        </div>
      </div>
    </BasicLayoutContext.Provider>
  )
}

BasicLayout.propTypes = {}

export default BasicLayout
