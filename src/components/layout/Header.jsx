import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"
import Seo from "./Seo"

const { Header } = Layout

const HeaderContainer = ({ siteTitle }) => {
  const menuItems = [
    {
      key: 1,
      url: "/",
      title: "ALL",
    },
    {
      key: 2,
      url: "/smileys-emotion",
      title: "😀 & 💖",
    },
    {
      key: 3,
      url: "/people-body",
      title: "👍 & 🙆",
    },
    {
      key: 4,
      url: "/food-drink",
      title: "🍓 & ☕",
    },
    {
      key: 5,
      url: "/component",
      title: "🦰",
    },
    {
      key: 6,
      url: "/animals-nature",
      title: "🐵 & 🌴",
    },
  ]

  return (
    <>
      {/* SEO 설정 */}
      <Seo
        title="Emoji Set 이모지 모음"
        description="Easily copy and paste emojis."
      />
      {/* 헤더 */}
      <Header className="header" style={{ padding: 0 }}>
        <div className="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          {menuItems.map(menuItem => (
            <Menu.Item key={menuItem.key}>
              <Link to={menuItem.url}>{menuItem.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </>
  )
}

HeaderContainer.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderContainer.defaultProps = {
  siteTitle: ``,
}

export default HeaderContainer
