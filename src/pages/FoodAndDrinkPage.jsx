import React from "react";
import EmojiBoxContainer from "../components/main/EmojiBoxContainer";

function FoodAndDrinkPage() {
  return (
    <>
      <EmojiBoxContainer url={"/emoji/data/food-drink"} skeletonLine={3} />
    </>
  );
}

export default FoodAndDrinkPage;
