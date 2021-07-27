import React from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";
import EmojiBoxContainer from "./EmojiBoxContainer";

const { Content } = Layout;

const MainContentsContainer = ({ menuItemList }) => {
  return (
    <Content className="main">
      <Breadcrumb className="main__breadcrumb" style={{}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <EmojiBoxContainer />
    </Content>
  );
};

MainContentsContainer.propTypes = {
  menuItemList: PropTypes.array.isRequired,
};

export default MainContentsContainer;
