import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function AnimalsAndNaturePage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/animals-nature"} skeletonLine={3} />
    </>
  );
}

export default AnimalsAndNaturePage;
