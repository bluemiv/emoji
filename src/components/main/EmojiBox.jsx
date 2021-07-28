import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

const EmojiBox = ({ emojiInfo }) => {
  const { id, emoji, unicode, name } = emojiInfo;
  return (
    <div className="emojibox__item">
      <Tooltip title={name}>
        <div className="emojibox__item-emoji">{emoji}</div>
      </Tooltip>
      <Tooltip placement="bottom" title={unicode}>
        <div className="emojibox__item-unicode">unicode</div>
      </Tooltip>
    </div>
  );
};

EmojiBox.propTypes = {};

export default EmojiBox;
