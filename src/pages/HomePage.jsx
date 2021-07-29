import React from "react";
import PropTypes from "prop-types";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";
import { emoji } from "../constants/emoji";

const HomePage = (props) => {
  return (
    <>
      {Object.keys(emoji).map((bighead) => (
        <EmojiBoxContainer
          key={bighead}
          title={bighead}
          data={emoji[bighead]}
        />
      ))}
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
