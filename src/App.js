import React from 'react';
import { connect } from 'react-redux';
import data from './data.json'


import './App.scss';
import ProductList from './component/ProductList';
import Filter from './component/Filter';
import Cart from './component/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
      product: data.products,
      size: "",
      sort: ""
    }
  }

  addToCart = (product) => {
    // duplicate form cartitem
    let alreadyInCart = false;
    const cartItem = this.state.cartItem.slice()
    cartItem.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true
      }
    });
    if (!alreadyInCart) {
      cartItem.push({ ...product, count: 1 })
    }

    this.setState({
      cartItem
    })
  }

  removeItemfromCart = (product) => {
    const cartItem = this.state.cartItem.slice()
    console.log("item>>", cartItem)
    this.setState({
      cartItem:    cartItem.filter((x) => x._id !== product._id)
    })
    }


  filterProduct = (event) => {
    console.log("filter size >>>", event.target.value)
    if (event.target.value === "") {
      this.setState({
        size: event.target.value,
        product: data.products
      })
    }
    else {
      this.setState({
        size: event.target.value,
        product: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),

      });

    }
  }

  sortProduct = (event) => {
    console.log("sort price >>>", event.target.value)
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      product: this.state.product.slice().sort((a, b) => (
        sort === "lowest" ?
          ((a.price > b.price) ? 1 : -1) :
          sort === "highest" ?
            ((a.price < b.price) ? 1 : -1) :
            ((a._id < b.id) ? 1 : -1)
      ))
    }))

  }

  render() {
    const { product, cartItem } = this.state
    return (
      <div className="App">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.product.length}
                sort={this.state.sort}
                size={this.state.size}
                filterProduct={this.filterProduct}
                sortProduct={this.sortProduct}
              />
              <ProductList product={this.state.product} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItem={cartItem} removeItemfromCart={this.removeItemfromCart}/>
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
