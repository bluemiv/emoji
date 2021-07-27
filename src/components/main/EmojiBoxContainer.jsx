import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EmojiBox from "./EmojiBox";
import SkeletonText from "../common/SkeletonText";

const EmojiBoxContainer = (props) => {
  const [loading, setLoading] = useState(true);
  // TODO 이모지 데이터를 가지고 온다.
  useEffect(() => {}, []);

  const genEmojiBox = () => {
    return <EmojiBox />;
  };

  return (
    <div className="main__contents-item">
      <h1>title</h1>
      {loading ? <SkeletonText line={3} /> : <div>{genEmojiBox()}</div>}
    </div>
  );
};

EmojiBoxContainer.propTypes = {};

export default EmojiBoxContainer;
