import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer = () => {
  return (
    <Footer className="footer">
      {new Date().getFullYear()} © EmojiSet, All rights reserved. Created by
      Taehong Kim
    </Footer>
  );
};

export default FooterContainer;
