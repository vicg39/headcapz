import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

import './styles/details.scss'; 

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id ,company, img, info, price, title, inCart} = 
                    value.detailProduct;
                    return (
                        <div className="container py-5">

                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made By: <span className="text=uppercase">{company}</span>
                                    </h4>
                                    <h4 className="">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3">
                                    Info about product
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    
                                    <div>
                                        <Link to="/">
                                            <button>Back to Product</button>
                                        </Link>
                                        <button className="add-to-cart-btn"
                                            cart   
                                            disabled={inCart ? true : false }
                                            onClick={() =>{
                                                value.addTpCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart? 'inCart' : "add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }}

            </ProductConsumer>
        )
    }
}
