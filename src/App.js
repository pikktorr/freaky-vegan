// REACT
import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component"
import SignPage from "./pages/sign-page/sign-page.component";

// STYLES
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignPage}/>
      </Switch>
    </div>
  );
}

export default App;
