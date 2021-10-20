import React from "react";
import { IconContainer, Icon, ItemCountText } from "./cart-icon.styles";

export const CartIcon = ({ count }) => {
  return (
    <IconContainer to="/cart">
      <ItemCountText>{count}</ItemCountText>
      <Icon />
    </IconContainer>
  );
};
