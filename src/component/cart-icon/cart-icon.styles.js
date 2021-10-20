import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

export const IconContainer = styled(Link)`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(ShoppingCartIcon)`
  width: 60px;
  height: 60px;
  color: #c32bad;
`;

export const ItemCountText = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 45px;
  color: #c32bad;
`;
