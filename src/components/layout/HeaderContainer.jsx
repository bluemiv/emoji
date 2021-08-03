import React from "react";
import { Layout, Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";

const { Header } = Layout;

const HeaderContainer = () => {
  const match = useRouteMatch();
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={match.url}>전체</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${match.url}smileys-emotion`}>스마일 & 감정</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderContainer;
