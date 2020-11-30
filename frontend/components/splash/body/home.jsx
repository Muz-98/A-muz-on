import React from 'react'
import SplashProducts from '../splash_products/splash_products_container';


class Home extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        if (this.props.products === undefined) return null 

        let topProducts = []
        let allProducts = Object.values(this.props.products)

            topProducts = allProducts.map( product => {
                return <SplashProducts product={product} key={product.id}/>
            })

        const topRow = topProducts.slice(0, 4)
        const botRow = topProducts.slice(5, 9)

        return (
            <div className="body-div">
               <div className="body-comps">
                    <img className="body-img" src={window.bodyImg} alt='black friday' />
               </div>
               <div className="body-products">
    
                <div className="body-products-top">
                    <ul>
                        {topRow}
                    </ul>
    
                </div>
    
                <div className="body-products-bottom">
                    <ul>
                        {botRow}
                    </ul>
    
                </div>
               </div>
    
    
          
    
    
            </div>
        )

    }
}

export default Home;