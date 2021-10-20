const productData = require('../../../data/products.json');
 
const basket = [];

export const resolvers = {
  products: () => productData,
  basket: () => basket,
  addToBasket: ({ productName }) => {
    const product = productData.find(({ name }) => productName === name);
    if (product) {
      basket.push(product);
      return {
        success: true
      }
    }
    throw new Error('Product not found')
  },
  removeFromBasket: ({ productName }) => {
    const productIndex = basket.findIndex(({ name }) => productName === name);
    if (productIndex === -1) throw new Error('Product not found');
    basket.splice(productIndex, 1);
    return {
      success: true
    }
  }
};