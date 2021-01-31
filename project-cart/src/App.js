import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Form from './components/Cart/Form'

import './App.css';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route  exact path="/" component={ProductList}/>
          <Route path="/Details" component={Details}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/form" component={Form}/>
          <Route  component={Default}/>
        </Switch>
        
      </React.Fragment>
     );
  }
} 

export default App;
