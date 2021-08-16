import React from "react";
import Main from "./components/main/body";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <NavBar />
          <Route>
            <Main />
          </Route>
          <Footer />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
