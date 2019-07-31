import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
// import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import About from './components/About';
import Modal from './components/modal';
// import CartList from './components/cart/CartList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/about" component={About}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
