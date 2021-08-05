import React from "react"
import PropTypes from "prop-types"

function Side({ title }) {
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
