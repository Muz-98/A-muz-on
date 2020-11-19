import React from 'react'
import Product from '../product/product'


const Body = () => {
    return (
        <div className="body-div">
           <div className="body-comps">
                <img className="body-img" src={window.bodyImg} alt='black friday' />
           </div>
           <div className="body-products">

            <div className="body-products-top">
                <div className="product1">
                    <Product />

                </div>
                    <div className="product2">
                    <Product />

                </div>
                    <div className="product3">
                    <Product />

                </div>
                    <div className="product4">
                    <Product />

                </div>

            </div>

            <div className="body-products-bottom">
                <div>
                    <Product />

                </div>
                <div>
                    <Product />

                </div>
                <div>
                    <Product />

                </div>
                <div>
                    <Product />

                </div>

            </div>
           </div>


      


        </div>
    )
}

export default Body;