import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Cards = (props) => {
    //console.log(props);
    const {name, img, work, experience, payment, rating} = props.value;
    const [disable, setDisable] = React.useState(false);
    const element = <FontAwesomeIcon icon={faHandsHelping} />
    return (
        <div className ="card-container" >
            <div className="card">
                <img src= {img} alt="Profile_pic" />
                <h4>Name: {name} </h4>
                <h5>Profession: {work} </h5>
                <h5>Working Experience: {experience} </h5>
                <h5>Pay per Hour: $ {payment} </h5>
                <h5>Rating: {rating} (5) </h5>
                <button  onClick= { () => props.handleAddToCart(props.value)} className="btn" > {element} Hire Me</button>
            </div>
        </div>
    );
};

export default Cards;