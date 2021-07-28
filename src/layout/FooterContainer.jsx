import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer = (props) => {
  return (
    <Footer className="footer">
      © {new Date().getFullYear()} EmojiSet, All rights reserved. Created by
      Taehong Kim
    </Footer>
  );
};

FooterContainer.propTypes = {};

export default FooterContainer;
