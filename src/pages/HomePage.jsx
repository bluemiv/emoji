import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header/Header";
import MainContents from "../components/main/MainContents";
import Footer from "../components/footer/Footer";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <MainContents />
      <Footer />
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
