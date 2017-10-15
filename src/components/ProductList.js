import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    handleProductUpVote(productId){
        console.log(productId + ' was upvoted !');
    }
    render() {
        function generateVoteCount() {
            return Math.floor((Math.random() * 50) + 15);
        }
        const product = [
            {
                id: 1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: require('../images/avatars/daniel.jpg'),
                productImageUrl: require('../images/products/image-aqua.png'),
            },
            {
                id: 2,
                title: 'Supermajority: The Fantasy Congress League',
                description: 'Earn points when your favorite politicians pass legislation.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: require('../images/avatars/kristy.png'),
                productImageUrl: require('../images/products/image-rose.png'),
            },
            {
                id: 3,
                title: 'Tinfoild: Tailored tinfoil hats',
                description: 'We already have your measurements and shipping address.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: require('../images/avatars/veronika.jpg'),
                productImageUrl: require('../images/products/image-steel.png'),
            },
            {
                id: 4,
                title: 'Haught or Naught',
                description: 'High-minded or absent-minded? You decide.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: require('../images/avatars/molly.png'),
                productImageUrl: require('../images/products/image-yellow.png'),
            },
        ];
        const products = product.sort((a, b) => (b.votes - a.votes));
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