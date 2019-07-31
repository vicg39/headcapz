import React, { Component } from 'react';
import './styles/modal.scss';
import { ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default class modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    
                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                            <ModalContainer className="modalcontainer">
                                <div className="container">
                                    <div className="row">
                                        <div  id="modal" className="col-8 mx-auto col-md-6 col-lg-4 
                                        text-center text-capitalize p-5">
                                            <h5>Item Added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"></img>
                                            <div>{title}</div>
                                            <div className="text-muted">price : $ {price}</div>
                                            <Link to="/">
                                                <button onClick={() => closeModal()}>
                                                    Continue Shopping
                                                </button>
                                            </Link>
                                            <Link to="/cart">
                                                <button className="modal-btn" onClick={() => closeModal()}>
                                                    Go to Cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
`

