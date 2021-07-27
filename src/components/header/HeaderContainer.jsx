import React from "react";
import PropTypes from "prop-types";
import LogoImage from "./LogoImage";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const genMenuItem = (menuItemList) =>
  menuItemList.map((item) => <Menu.Item key={item.key}>{item.text}</Menu.Item>);

const HeaderContainer = ({ menuItemList }) => {
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
