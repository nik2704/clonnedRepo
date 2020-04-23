import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data.js';

class Shop extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        // console.log(this.props.location.pathname);

        return(
            <div className='shop-page'> {
                // collections.filter(item=>item.routeName === this.props.location.pathname.split('/')[2]).map(({ id, ...otherCollectionProps}) => (
                collections.map(({ id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}

export default Shop;
