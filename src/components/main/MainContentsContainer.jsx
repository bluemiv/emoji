import React from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const MainContentsContainer = (props) => {
  return (
    <Content className="main">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="main__bg">Content</div>
    </Content>
  );
};

MainContentsContainer.propTypes = {};

export default MainContentsContainer;
