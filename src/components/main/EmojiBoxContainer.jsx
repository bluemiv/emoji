import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Divider } from "antd";
import axios from "axios";
import EmojiBox from "./EmojiBox";
import SkeletonText from "../common/SkeletonText";

const EmojiBoxContainer = ({ url, skeletonLine }) => {
  const [emoji, setEmoji] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      setEmoji(res.data);
      setLoading(false);
    });
  }, [url]);

  const genEmojiBox = () =>
    Object.keys(emoji.data).map((mediumHead) => {
      const subData = emoji.data[mediumHead];

      return (
        <div key={mediumHead} className="emojibox__medium">
          <Divider>{mediumHead}</Divider>
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
      {loading ? (
        <SkeletonText line={skeletonLine} />
      ) : (
        <>
          <h2 className="emojibox__tit">{emoji.title}</h2>
          {genEmojiBox()}
        </>
      )}
    </div>
  );
};

EmojiBoxContainer.propTypes = {
  url: PropTypes.string.isRequired,
  skeletonLine: PropTypes.number.isRequired,
};

export default EmojiBoxContainer;
