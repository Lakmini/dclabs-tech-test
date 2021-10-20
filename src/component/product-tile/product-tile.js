import React from "react";
import {
  TileContentContainer,
  ImgContainer,
  TextContainer,
  Text,
  PriceText,
} from "./product-tile.styles";
export const ProductTile = ({
  url,
  category,
  price,
  contractLength,
  btnAction,
}) => {
  return (
    <TileContentContainer className="c-tile">
      <div className="c-tile__content">
        <ImgContainer>
          <img alt="Example image" className="c-tile__poster" src={url} />
        </ImgContainer>
        <TextContainer>
          <Text>{category}</Text>
          <p className="c-tile__title c-heading-delta">
            <PriceText> &#163; {`${price}`} </PriceText>a month
          </p>
          <p className="c-tile__title c-heading-delta">
            {`${contractLength} month contract`}
          </p>
          <button
            className="c-btn c-btn--primary  u-margin-bottom"
            onClick={btnAction}
          >
            {"Add To Cart"}
          </button>
        </TextContainer>
      </div>
    </TileContentContainer>
  );
};
