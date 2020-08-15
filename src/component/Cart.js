import React, { Component } from 'react'
import formatCurrency from "../util"
import Fade from "react-reveal/Fade";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showCheckout: false,
            name: "",
            email: "",
            address: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createOrder = (e) => {
        // debugger
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItem: this.props.cartItem
        }
        this.props.createOrder(order);
    }
    render() {
        const { cartItem } = this.props
        console.log("cartItem", cartItem)
        return (
            <>
                <div className="cartHeader">

                    {cartItem.length === 0 ? <span>Cart is empty</span> : <span>You have {cartItem.length} in the card  </span>}

                </div>
                <Fade left >
                <ul className="cartItemList">
                    {
                        cartItem.map((item, key) => {
                            return <li key={cartItem._id}>
                                <div className="cartItemListImg">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="cartItemListDetail">
                                    <p>Price: {item.price}</p>
                                    <p>{item.title}</p>
                                    <div className="cartItemListButton">Price: {formatCurrency(item.price)} X {item.count}
                                        <button onClick={() => this.props.removeItemfromCart(item)}>Remove</button>
                                    </div>

                                </div>

                            </li>
                        })
                    }
                </ul>
                </Fade>
                {cartItem.length !== 0 ?

                    <div className="proceedSection">
                        <div className="totalPrice">Total:
                    {formatCurrency(cartItem.reduce((a, c) => a + c.price * c.count, 0))}
                        </div>
                        <button className="proceedBtn" onClick={() => { this.setState({ showCheckout: true }) }}>Proceed</button>
                    </div>
                    :
                    ""
                }

                {this.state.showCheckout &&
                    <div className="cartForm">
                        <Fade clear cascade={true}>
                        <form  onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Name</label>
                                    <input type="text" required onChange={this.handleInput} name="name"></input>
                                </li>
                                <li>
                                    <label>Email</label>
                                    <input type="email" required onChange={this.handleInput} name="email"></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input type="text" required onChange={this.handleInput} name="address"></input>
                                </li>
                                <li>
                                    <button className="" type="submit">CheckOut</button>
                                </li>
                            </ul>
                        </form>
                        </Fade>
                    </div>

                }
            </>
        )
    }
}

export default Cart