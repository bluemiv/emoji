import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"
import Seo from "./seo"

const { Header } = Layout

const HeaderContainer = ({ siteTitle }) => {
  const menuItems = [
    {
      key: 1,
      url: "/",
      title: "Emoji Set",
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
    <Header>
      {/* SEO 설정 */}
      <Seo
        title="Emoji Set 이모지 모음"
        description="Easily copy and paste emojis."
      />
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {menuItems.map(menuItem => (
          <Menu.Item key={menuItem.key}>
            <Link to={menuItem.url}>{menuItem.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  )
}

HeaderContainer.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderContainer.defaultProps = {
  siteTitle: ``,
}

export default HeaderContainer
