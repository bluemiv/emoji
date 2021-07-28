import React from "react";
import PropTypes from "prop-types";
import LogoImage from "../components/header/LogoImage";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const genMenuItem = (menuItemList) =>
  menuItemList.map((item) => <Menu.Item key={item.key}>{item.text}</Menu.Item>);

const HeaderContainer = () => {
  const menuItemList = [
    {
      key: 1,
      text: "전체",
    },
    {
      key: 2,
      text: "🙅 사람",
    },
    {
      key: 3,
      text: "😀 표정",
    },
    {
      key: 4,
      text: "😺 동물",
    },
  ];

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {genMenuItem(menuItemList)}
      </Menu>
    </Header>
  );
};

HeaderContainer.propTypes = {
  menuItemList: PropTypes.array.isRequired,
};

export default HeaderContainer;
