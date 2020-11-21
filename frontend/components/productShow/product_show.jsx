import React from 'react'
import { withRouter } from 'react-router-dom'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    componentDidMount() {
        debugger 
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        debugger 
        // let product = <div>TEST</div>;
        // if (this.props.product) {
        //     debugger 
        //     product = <div>{this.props.product.name}</div>
        // }
        debugger 
        console.log(this.props)
        return (
            <div>

                <div>SHOWWW</div>
                {/* {product} */}
                <div>{this.props.product.id.name}</div>
                {/* {this.props.product.price} */}
            </div>
        )
    }
}

export default withRouter(ProductShow)