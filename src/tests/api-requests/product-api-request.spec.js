import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createProductService } from "../../api-requests/product-api-requests";
import fetch from "../../mock/fetch";

configure({ adapter: new Adapter() });

const productService = createProductService({
  fetch,
  baseUrl: "http://localhost:4000/rest",
});

describe("product api requests", () => {
  it("should get products for a category", (done) => {
    productService
      .productsForCategory("test")
      .then((res) => expect(res).toEqual({ data: "response" }))
      .then(() => done())
      .catch((err) => done(err));
  });
});
