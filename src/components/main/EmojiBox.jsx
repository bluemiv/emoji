import React from "react";
import PropTypes from "prop-types";
import { Button, Tooltip } from "antd";
import { onClickOkNotification } from "../common/Notification";

const EmojiBox = ({ emojiInfo }) => {
  const { emoji, unicode, name } = emojiInfo;

  const onClickHandler = () => {
    navigator.clipboard.writeText(emoji);
    onClickOkNotification(
      "복사 완료",
      `이모지 ${emoji}를 원하시는곳에 붙여 사용하세요!\n${name} (${unicode})`
    );
  };

  return (
    <Tooltip type="primary" title={`${name} (${unicode})`}>
      <Button className="emojibox__item" onClick={onClickHandler}>
        <div className="emojibox__item-emoji">{emoji}</div>
      </Button>
    </Tooltip>
  );
};

EmojiBox.propTypes = {
  emojiInfo: PropTypes.object.isRequired,
};

export default EmojiBox;
