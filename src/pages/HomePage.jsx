import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../components/header/HeaderContainer";
import MainContentsContainer from "../components/main/MainContentsContainer";
import FooterContainer from "../components/footer/FooterContainer";

import { Layout } from "antd";

const HomePage = (props) => {
  return (
    <Layout className="container">
      <HeaderContainer />
      <MainContentsContainer />
      <FooterContainer />
    </Layout>
  );
};

HomePage.propTypes = {};

export default HomePage;
