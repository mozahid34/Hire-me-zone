import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Cards from '../info/Cards';
import './Body.css'

const Body = () => {
    const[values, setValues] = useState([]);
    const[cart, setCart] = useState([]);


    useEffect(() =>  {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setValues(data));
    },[])

    const handleAddToCart = value => {
        const newCart = [...cart, value];
        setCart(newCart);
       
    }
    return (
        <div className="container">
            <div className="view">
            {
                values.map(value => <Cards
                key = {value.id}
                value = {value}
                handleAddToCart = {handleAddToCart}
                ></Cards> )
            }
            </div>

            <div className="cart">
               <Cart cart = {cart} ></Cart>

            </div>
        </div>

        

        
        
    );
};

export default Body;