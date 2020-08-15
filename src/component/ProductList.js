import React, { Component } from 'react'
import formatCurrency from "../util"
import Zoom from "react-reveal/Zoom";

class ProductList extends Component {
    render() {
        return (
            <Zoom clear cascade={true}>
            <ul className="product">
                {
                    this.props.product.map((product) => {
                        return (
                            <li key={product._id}>
                                <div className="dress">
                                    <a href={"#"+product._id}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>{product.title}</p>
                                    </a>
                                </div>    
                                    <div className="productPrice">
                                        <div className="price">{formatCurrency(product.price)}</div>
                                        {/* <div className="price">{product.price}</div> */}
                                        <button onClick={()=>this.props.addToCart(product)} className="btn">ADD TO CART</button>
                                    </div>
                                

                            </li>
                        )
                    })
                }
            </ul>
            </Zoom>
        )
    }
}

export default ProductList