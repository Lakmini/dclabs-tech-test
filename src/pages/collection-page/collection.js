import React, { useState, useEffect, useContext } from "react";
import { CollectionPageContainer, Title } from "./collection.styles";
import { ProductTile } from "../../component/product-tile/product-tile";
import service from "../../api-requests/product-api-requests";
import { CartContext } from "../../context/cart-context-provider";
import { useParams } from "react-router-dom";

export const CollectionPage = () => {
  let { type } = useParams();
  console.log(type);
  const { addToCart } = useContext(CartContext);
  const [products, setProductList] = useState([]);

  useEffect(() => {
    service.productsForCategory(type).then((data) => {
      setProductList(data);
    });
  }, []);

  return (
    <CollectionPageContainer>
      <Title>{type}</Title>
      <div className="o-layout  o-layout--space">
        {products.map((product) => {
          return (
            <div
              className="o-layout__item  u-width-1/2@large "
              key={product.name}
            >
              <ProductTile
                url="https://www.sky.com/assets/masthead/images/sky-logo.png"
                category={product.name}
                price={product.cost.amount.main}
                contractLength={product.contractLength}
                currency={product.cost.currency}
                btnAction={() => addToCart(product)}
              />
            </div>
          );
        })}
      </div>
    </CollectionPageContainer>
  );
};
