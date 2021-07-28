import React from "react";
import PropTypes from "prop-types";
import EmojiBox from "./EmojiBox";

const EmojiBoxContainer = ({ title, data }) => {
  const genEmojiBox = () =>
    Object.keys(data).map((mediumHead) => {
      const subData = data[mediumHead];

      return (
        <div key={mediumHead} className="emojibox__medium">
          <h3 className="emojibox__medium-tit">{mediumHead}</h3>
          <div className="emojibox__item-container">
            {subData.map((emojiInfo) => (
              <EmojiBox key={emojiInfo.id} emojiInfo={emojiInfo} />
            ))}
          </div>
        </div>
      );
    });

  return (
    <div className="main__contents-item emojibox__big">
      <h2 className="emojibox__tit">{title}</h2>
      {genEmojiBox()}
    </div>
  );
};

EmojiBoxContainer.propTypes = {};

export default EmojiBoxContainer;
