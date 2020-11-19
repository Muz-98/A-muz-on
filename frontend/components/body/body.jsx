import React from 'react'
import Product from '../product/product'


const Body = () => {
    return (
        <div className="body-div">
           <div className="body-comps">
                {/* <img className="body-img" src={window.blackFriday} alt='black friday' /> */}
           </div>

           <div className="body-products-top">
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
    )
}

export default Body;