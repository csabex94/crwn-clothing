import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item';


import './collection.scss';


const Collection = ({ collection }) => {

    const { title, items } = collection ? collection : ( <h2>Loading...</h2> )
    
    return (

        <div className="collection-page">

            <h2 className="title">{title}</h2>

            <div className="items">

                { items ? items.map(item => ( <CollectionItem key={item.id} item={item} /> )) : <h2>Loading...</h2> }

            </div>
            
        </div>

    );

};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);