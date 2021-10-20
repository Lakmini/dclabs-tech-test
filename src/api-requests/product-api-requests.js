import defaultFetch from "isomorphic-fetch";

export const createProductService = ({ fetch, baseUrl }) => {
  const productsForCategory = (category) => {
    return fetch(`${baseUrl}/category?category=${category}`).then((res) =>
      res.json()
    );
  };
  return { productsForCategory };
};

export default createProductService({
  fetch: defaultFetch,
  baseUrl: "http://localhost:4000/rest",
});
