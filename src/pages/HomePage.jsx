import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function HomePage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/smileys-emotion"} skeletonLine={3} />
      <EmojiBoxContainer url={"/emoji/data/people-body"} skeletonLine={5} />
      <EmojiBoxContainer url={"/emoji/data/food-drink"} skeletonLine={3} />
      <EmojiBoxContainer url={"/emoji/data/component"} skeletonLine={1} />
      <EmojiBoxContainer url={"/emoji/data/animals-nature"} skeletonLine={3} />
    </>
  );
}

export default HomePage;
