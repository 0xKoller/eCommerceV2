import React from "react";
import Main from "../pages/home/home";
import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import NotFound from "../pages/notFound/notFound";
import ItemListContainer from "../components/shop/items/ItemList/ItemListContainer";
import { ItemDetailContainer } from "../components/shop/items/ItemList/ItemDetail/ItemDetailContainer";
import { Cart } from "../pages/cart/cart";
import { CartProvider } from "../context/cartContext";
import { BuyerForm } from "../pages/buyerform/buyerform";
import { ItemDetail } from "../components/shop/items/ItemList/ItemDetail/ItemDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/products/:id" component={ItemDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/shopform" component={BuyerForm} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;
