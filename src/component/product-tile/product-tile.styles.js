import styled from "styled-components";

export const TileContentContainer = styled.article`
  background: #0072c9;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div.attrs(() => ({
  className: "c-tile__media",
}))`
  background: linear-gradient(rgb(115, 173, 216), white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TextContainer = styled.div.attrs(() => ({
  className: "c-tile__body",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const Text = styled.p.attrs(() => ({
  className: "c-tile__title c-heading-delta",
}))`
  color: #8e0505;
  font-weight: bold;
`;

export const PriceText = styled.span.attrs(() => ({
  className: "c-tile__title c-heading-delta",
}))`
  background-image: linear-gradient(
    to right,
    rgb(245, 100, 0) 0%,
    rgb(255, 0, 0) 25%,
    rgb(181, 0, 125) 50%,
    rgb(33, 66, 156) 75%,
    rgb(0, 113, 255) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 60px;
  font-weight: bold;
`;
