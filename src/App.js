import React from 'react';
import { connect } from 'react-redux';
import data from './data.json'


import './App.scss';
import ProductList from './component/ProductList';

class App extends React.Component {
constructor(){
  super();
  this.state={
    product:data.products,
    size:"",
    sort:""
  }
}

  render(){
    const {product}=this.state
  return (
    <div className="App">
      <header>
        <a href="/">React shopping cart</a>
      </header>
   <main>
     <div className="content">
       <div className="main">
         <ProductList product={this.state.product}/>
       </div>
       <div className="sidebar">
         cart
       </div>
     </div>
   </main>
      <footer>
        footer
</footer>
    </div>
  );
  }
}

export default connect()(App)
