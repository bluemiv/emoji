import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function ComponentPage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/component"} skeletonLine={1} />
    </>
  );
}

export default ComponentPage;
