import React from 'react';
import { connect } from 'react-redux';
import data from './data.json'


import './App.scss';
import ProductList from './component/ProductList';
import Filter from './component/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: ""
    }
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
    const { product } = this.state
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
              <ProductList product={this.state.product} />
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
