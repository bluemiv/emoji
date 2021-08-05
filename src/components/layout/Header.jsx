import React, { useContext } from "react"
import PropTypes from "prop-types"
import { IconButton } from "@material-ui/core"
import { MenuOpenOutlined, MenuOutlined } from "@material-ui/icons"
import { BasicLayoutContext } from "./BasicLayout"

function Header() {
  const { sideToggle, setSideToggle } = useContext(BasicLayoutContext)

  return (
    <header role="header" className={sideToggle ? null : "header-fill"}>
      <IconButton color="primary" onClick={() => setSideToggle(!sideToggle)}>
        {sideToggle ? <MenuOpenOutlined /> : <MenuOutlined />}
      </IconButton>
    </header>
  )
}

Header.propTypes = {}

export default Header
