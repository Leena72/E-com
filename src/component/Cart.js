import React, { Component } from 'react'

 class Cart extends Component {
    render() {
        const {cartItem}=this.props
        return (
           <div className="cartHeader">

{cartItem.length === 0 ? <span>Cart is empty</span> : <span>You have {cartItem.length} in the card  </span>}
                
            </div>
        )
    }
}

export default Cart