import React from 'react'
import SplashProducts from '../splash_products/splash_products_container';


const Body = () => {
    return (
        <div className="body-div">
           <div className="body-comps">
                <img className="body-img" src={window.bodyImg} alt='black friday' />
           </div>
           <div className="body-products">

            <div className="body-products-top">
                <div className="product1">
                        <SplashProducts />

                </div>
                    <div className="product2">
                        <SplashProducts />

                </div>
                    <div className="product3">
                        <SplashProducts />

                </div>
                    <div className="product4">
                        <SplashProducts />

                </div>

            </div>

            <div className="body-products-bottom">
                <div>
                        <SplashProducts />

                </div>
                <div>
                        <SplashProducts />

                </div>
                <div>
                        <SplashProducts />

                </div>
                <div>
                        <SplashProducts />

                </div>

            </div>
           </div>


      


        </div>
    )
}

export default Body;