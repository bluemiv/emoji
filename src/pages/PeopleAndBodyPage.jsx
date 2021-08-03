import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function FaceAndEmotionPage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/people-body"} skeletonLine={5} />
    </>
  );
}

export default FaceAndEmotionPage;
