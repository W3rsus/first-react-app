import React, { Component } from 'react';
import logo from './logo.svg';
import ProductList from './components/ProductList';
import './App.css';
import './semantic-dist/semantic.css';
class App extends Component {
  render() {
    return (
            <ProductList/>
    );
  }
}

export default App;
