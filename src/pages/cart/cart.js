import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cart-context-provider";
import {
  CartContainer,
  CartBox,
  Card,
  CardContet,
  CheckoutBox,
  TextBox,
  RemoveBtn,
  TitleText,
  PriceText,
  CartEmptySection,
  Heading,
} from "./cart.styles";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let result = cart.reduce((prev, item) => {
      return prev + item.cost.amount.main;
    }, 0);

    setTotal(result);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  const removeProduct = (name) => {
    if (window.confirm("Are you sure to remove this product ?")) {
      cart.forEach((item, index) => {
        if (item.name === name) {
          cart.splice(index, 1);
          item.count = 1;
        }
      });
      setCart([...cart]);
    }
  };
  if (cart.length === 0)
    return (
      <CartEmptySection id="cart-section">
        Cart is Empty ...!!!{" "}
      </CartEmptySection>
    );

  return (
    <section>
      <CartContainer>
        <CartBox>
          {cart.map((product) => (
            <Card key={product.name}>
              <CardContet>
                <TitleText title={product.name}>{product.name}</TitleText>
                <PriceText>
                  &#163; {`${product.cost.amount.main} (Monthly)`}
                </PriceText>
                <RemoveBtn onClick={() => removeProduct(product.name)}>
                  Remove
                </RemoveBtn>
              </CardContet>
            </Card>
          ))}
        </CartBox>

        <CheckoutBox>
          <Heading>Price Details</Heading>

          <TextBox>
            <p>Price : </p>
            <p>&#163; {total.toLocaleString()}</p>
          </TextBox>

          <TextBox>
            <p>Discount : </p>
            <p>&#163; {0}</p>
          </TextBox>

          <TextBox>
            <p>Total: </p>
            <p>&#163; {total.toLocaleString()}</p>
          </TextBox>

          <button
            className="c-btn c-btn--primary c-btn--full u-margin-bottom"
            onClick={() => console.log(cart)}
          >
            Payment
          </button>
        </CheckoutBox>
      </CartContainer>
    </section>
  );
};
