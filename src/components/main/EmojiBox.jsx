import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { onClickOkNotification } from "../common/Notification";

const EmojiBox = ({ emojiInfo }) => {
  const { id, emoji, unicode, name } = emojiInfo;

  const onClickHandler = () => {
    navigator.clipboard.writeText(emoji);
    onClickOkNotification(
      "복사 완료",
      `${emoji}를 원하시는곳에 붙여 사용하세요!`
    );
  };

  return (
    <div className="emojibox__item" onClick={onClickHandler}>
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
