import React from "react";
import PropTypes from "prop-types";
import EmojiBox from "./EmojiBox";

const EmojiBoxContainer = ({ title, data }) => {
  const genEmojiBox = () =>
    Object.keys(data).map((mediumHead) => {
      const subData = data[mediumHead];

      return (
        <div key={mediumHead}>
          <h3>{mediumHead}</h3>
          <div>
            {subData.map((emojiInfo) => (
              <EmojiBox key={emojiInfo.id} emojiInfo={emojiInfo} />
            ))}
          </div>
        </div>
      );
    });

  return (
    <div className="main__contents-item">
      <h2>{title}</h2>
      {genEmojiBox()}
    </div>
  );
};

EmojiBoxContainer.propTypes = {};

export default EmojiBoxContainer;
