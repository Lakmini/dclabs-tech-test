import React from "react";
import { CartIcon } from "../cart-icon/cart-icon";
import { HeaderContainer, LogoContainer, Logo } from "./header.styles";
import { useCartContext } from "../../context/cart-context-provider";

export const Header = () => {
  const { cart } = useCartContext();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <CartIcon count={cart.length} />
    </HeaderContainer>
  );
};
