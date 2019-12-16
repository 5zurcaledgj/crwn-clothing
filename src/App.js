import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkIfSignedIn } from "./redux/user/user.actions";

const App = ({ checkIfSignedIn, currentUser }) => {
  useEffect(() => {
    checkIfSignedIn();
  }, [checkIfSignedIn]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/checkout" exact component={CheckoutPage}></Route>
        <Route
          path="/signin"
          exact
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkIfSignedIn: () => dispatch(checkIfSignedIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
