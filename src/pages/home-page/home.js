import React from "react";
import { HomePageContainer } from "./home.styles";
import { Tile } from "../../component/tile/tile";
export const Home = () => {
  const imgUrl = "https://www.sky.com/assets/masthead/images/sky-logo.png";
  return (
    <HomePageContainer>
      <Tile url={imgUrl} category="sky-sports" />
      <Tile url={imgUrl} category="sky-news" />
    </HomePageContainer>
  );
};
