import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
        state = {product: []};

    componentDidMount() {
        this.setState({product: require('../seed.products')});
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.product.map((prod)=>{
            if(prod.id === productId){
                return Object.assign({} ,prod, {
                    votes: prod.votes+1
                });
            }else {
                return prod;
            }
        });
        this.setState({product: nextProducts});
    }

    render() {

        const products = this.state.product.sort((a, b) => (b.votes - a.votes));
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items middle aligned content'>
                <h1 className='middle aligned content'>Popular Products</h1>
                {productComponents}
            </div>
        )
    }
}

export default ProductList;