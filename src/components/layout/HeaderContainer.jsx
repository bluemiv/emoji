import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderContainer = () => {
  const menuItems = [
    {
      key: 1,
      url: "/",
      title: "전체",
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
  ];

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {menuItems.map((menuItem) => (
          <Menu.Item key={menuItem.key}>
            <Link to={menuItem.url}>{menuItem.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default HeaderContainer;
