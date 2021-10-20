import defaultData from "../../../data/products.json";

export const ProductService = ({ data }) => {
  const productsForCategory = (category = "") => {
    return data.filter((product) => {
      if (!product.category) {
        return true;
      }
      return product.category === category;
    });
  };
  return { productsForCategory };
};

export default ProductService({ data: defaultData });
