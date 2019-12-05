import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/shop' exact component={ShopPage}></Route>
        <Route path='/signin' exact component={SignInAndSignUp}></Route>
      </Switch> 
    </div>
  );
}

export default App;
