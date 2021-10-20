import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  display: flex;
  margin: 10px;
  background: #ffffff;
  box-shadow: 0 2px 6px #555;
  padding: 15px;
  position: relative;
  width: 400px;
`;

export const CardImg = styled.div``;
export const CardContet = styled.div`
  padding: 0 10px 0 15px;
`;

export const CheckoutBox = styled.div`
  align-self: flex-start;
  margin: 10px;
  background: #ffffff;
  box-shadow: 0 2px 6px #555;
  padding: 15px;
  width: 400px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 5px 10px;
`;

export const RemoveBtn = styled.button.attrs(() => ({
  className: "c-btn c-btn--primary u-margin-bottom",
}))`
  position: absolute;
  bottom: 5px;
  right: 5px;
  margin: 10px;
`;

export const TitleText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const PriceText = styled.h3`
  color: #c20d0d;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const CartEmptySection = styled.section`
  flex-direction: row;
  font-size: 3rem;
  text-align: center;
`;

export const Heading = styled.p`
  text-align: center;
  color: #0072c9;
  font-weight: bold;
`;
