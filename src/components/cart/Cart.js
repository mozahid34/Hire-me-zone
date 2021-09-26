import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    //const name;
    
    for (const product of cart) {
        total = total + product.payment;
        //name = product.name;
    }
    return (
        <div>
            <div className="title">
                <h2>Cart-Info</h2>
            </div>
            <hr />
             <h3>Person: {props.cart.length} </h3>
            <h3>Total: ${total} </h3>
            <br />
            
                
        </div>
    );
};

export default Cart;