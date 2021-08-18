import React from "react";
import Main from "../pages/home/home";

import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import NotFound from "../pages/notFound/notFound";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
