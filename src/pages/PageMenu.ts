// @ts-nocheck
import { MenuTable } from "../components/MenuTable";
import "../styles/menu.scss";
import images from "../data/images.json";

export const PageMenu = () => {
  const imageFoodRoll = images.find(
    (imageItem) => imageItem.name === "food rolls"
  );
  return /*html*/ `
<main>
  <h1>Menu</h1>
  <h2>Snacks</h2>
  <div class="flexbox">
    ${MenuTable()}

    <img src="${imageFoodRoll?.url}" alt="${imageFoodRoll?.alt}">


    <img class="tall__image" src="https://assets.website-files.com/6196d22f14605588db7936dc/6196d918bdb49658c3e485b7_portrait-03.jpg"
      alt="french fries with an bowl of avocado dips with topings">
  </div>
  <img class="small__image" src="https://assets.website-files.com/6196d22f14605588db7936dc/6196d918bdb496f00ae485b8_landscape-07-p-500.jpeg"
    alt="a mexican buffet">
</main>
`;
};
