import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header } from "../../component/header/header";
import * as CartContext from "../../context/cart-context-provider";

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  test("it should mock the context", () => {
    const contextValues = { cart: [] };
    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Header />);
    const cartIcon = wrapper.find("CartIcon");
    expect(cartIcon.get(0).props.count).toBe(0);
  });
});
