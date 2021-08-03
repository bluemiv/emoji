import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function SmileysAndEmotionPage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/smileys-emotion"} skeletonLine={3} />
    </>
  );
}

export default SmileysAndEmotionPage;
