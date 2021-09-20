import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import Main from "../pages/home/home";
import Footer from "../components/footer/footer";
import AboutUs from "../pages/aboutUs/aboutUs";
import NotFound from "../pages/notFound/notFound";
import { Cart } from "../pages/cart/cart";
import { CartProvider } from "../context/cartContext";
import { ItemDetail } from "../components/shop/items/ItemList/ItemDetail/ItemDetail";
import { Categorie } from "../pages/categories/categories";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/products/:id" component={ItemDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:categoryId" component={Categorie} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;
