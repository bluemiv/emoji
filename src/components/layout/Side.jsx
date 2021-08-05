import React, { useContext } from "react"
import PropTypes from "prop-types"
import { BasicLayoutContext } from "./BasicLayout"

function Side({ title }) {
  const { sideToggle } = useContext(BasicLayoutContext)
  if (!sideToggle) {
    return null
  }

  return (
    <div className="side-container">
      <h1 className="title">{title}</h1>
      <ul className="menu">
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴2</li>
        <li>메뉴2</li>
        <li>메뉴2</li>
        <li>메뉴2</li>
        <li>메뉴2</li>
      </ul>
    </div>
  )
}

Side.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Side
