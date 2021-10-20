import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Header } from "./component/header/header";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Home } from "./pages/home-page/home";
import { CollectionPage } from "./pages/collection-page/collection";
import { CartContextProvider } from "./context/cart-context-provider";
import { Cart } from "./pages/cart/cart";

export const App = () => (
  <CartContextProvider>
    <Switch>
      <Route>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/collection/:type" component={CollectionPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Route>
    </Switch>
  </CartContextProvider>
);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("document")
);

if (module.hot) {
  module.hot.accept();
}
