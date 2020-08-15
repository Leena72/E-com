import React, { Component } from 'react'
import formatCurrency from "../util"
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal"
import Fade from "react-reveal/Fade";


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }
    openModal = (product) => {
        this.setState({ product })
    }
    closeModal = () => {
        this.setState({ product: null })
    }
    render() {
        const { product } = this.state;
        console.log("product", product)
        return (
            <>
                <Zoom clear cascade={true}>
                    <ul className="product">
                        {
                            this.props.product.map((product) => {
                                return (
                                    <li key={product._id}>
                                        <div className="dress">
                                            <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                                <img src={product.image} alt={product.title}></img>
                                                <p>{product.title}</p>
                                            </a>
                                        </div>
                                        <div className="productPrice">
                                            <div className="price">{formatCurrency(product.price)}</div>
                                            {/* <div className="price">{product.price}</div> */}
                                            <button onClick={() => this.props.addToCart(product)} className="btn">ADD TO CART</button>
                                        </div>


                                    </li>
                                )
                            })
                        }
                    </ul>
                </Zoom>
                {
                    product && <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom clear>
                            <div className="modal-container">
                                <div className="modal-img">
                                    <Fade clear> <img src={product.image} alt={product.title}></img></Fade>
                                </div>
                                <div className="modal-description">
                                    <p>TITLE: <span>{product.title}</span></p>
                                    <p>DESCRIPTION: <span>{product.description}</span> </p>
                                    <p>AVAILABLE SIZES :
                                    {product.availableSizes.map((x) => (
                                        <span>{" "}
                                            <button>{x}</button>
                                        </span>
                                    ))}
                                    </p>
                                    <p>PRICE: <span>{formatCurrency(product.price)}</span></p>
                                    <button className="modal-btn" onClick={() => {
                                        this.props.addToCart(product)
                                        this.closeModal()
                                    }}>Add to Cart</button>

                                </div>
                                <button className="close-modal" onClick={this.closeModal}> Close</button>

                            </div>
                        </Zoom>
                    </Modal>
                }
            </>
        )
    }
}

export default ProductList