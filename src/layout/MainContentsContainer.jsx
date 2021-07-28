import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";
import HomePage from "../pages/HomePage";

const { Content } = Layout;

const MainContentsContainer = () => {
  return (
    <Content className="main">
      <Breadcrumb className="main__breadcrumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      {/* 라우팅 추가 */}
      <HomePage />
    </Content>
  );
};

MainContentsContainer.propTypes = {
  menuItemList: PropTypes.array.isRequired,
};

export default MainContentsContainer;
