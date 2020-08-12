import React, { Component } from 'react'
import formatCurrency from "../util"

class Cart extends Component {
    render() {
        const { cartItem } = this.props
        console.log("cartItem", cartItem)
        return (
            <>
                <div className="cartHeader">

                    {cartItem.length === 0 ? <span>Cart is empty</span> : <span>You have {cartItem.length} in the card  </span>}

                </div>
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
                {cartItem.length !== 0 ?

                    <div className="proceedSection">
                        <div className="totalPrice">Total:
                    {formatCurrency(cartItem.reduce((a, c) => a + c.price * c.count, 0))}
                        </div>
                        <button className="proceedBtn">Proceed</button>
                    </div>
                    :
                    ""
                }
            </>
        )
    }
}

export default Cart