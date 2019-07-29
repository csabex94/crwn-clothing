import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shop/shop';
import Header from './components/header/header';
import CheckoutPage from './page/checkout/checkout';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {

    checkUserSession()

  }, [checkUserSession]);

  return (

    <div>

      <Header />

      <Switch>

        <Route exact path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />

        <Route exact path="/checkout" component={CheckoutPage} />

        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />) } />

      </Switch>

    </div>

  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

 const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
 });

export default connect(mapStateToProps, mapDispatchToProps)(App);
