import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../components/header/HeaderContainer";
import MainContentsContainer from "../components/main/MainContentsContainer";
import FooterContainer from "../components/footer/FooterContainer";

import { Layout } from "antd";

const HomePage = (props) => {
  // 메뉴 네비게이션 아이템
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
    <Layout className="container">
      <HeaderContainer menuItemList={menuItemList} />
      <MainContentsContainer menuItemList={menuItemList} />
      <FooterContainer />
    </Layout>
  );
};

HomePage.propTypes = {};

export default HomePage;
