import React, { Component } from 'react'

class ProductList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.product.map((product) => {
                        return (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#"+product._id}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="productPrice">
                                        <div>{product.price}</div>
                                        <button className="bn">ADD TO CART</button>
                                    </div>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ProductList