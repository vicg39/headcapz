import React, { Component } from 'react';
import Product from './Product';
import Title from './Tittle';
// import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">


                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="../img/hat-1.jpg" alt="First slide"/>
                        </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../img/hat-2.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../img/hat-3.jpg" alt="Third slide"/>
                    </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>





                        <Title name="Never forget" title="You are Unique"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                    
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            
        )
    }
}

