import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #73add8;
`;

export const LogoContainer = styled(Link)`
  width: 100px;
  height: 100%;
  padding: 20px;
  &:hoover: {
    transform: scale(1.1);
    transition: transform 200ms;
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 25px;
  background-image: url("https://www.sky.com/assets/masthead/images/sky-logo.png");
  background-size: contain;
  background-position: center;
`;
