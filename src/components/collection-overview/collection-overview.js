import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionToPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../preview-collection/collection-preview';

import './collection-overview.scss';


const CollectionOverview = ({ collections }) => {


    return (

        <div className="collection-overview">

            {
                collections.map(({ id, ...otherCollectionProps }) => (

                    <CollectionPreview key={id} {...otherCollectionProps} />

                ))
            }

        </div>

    );

};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionToPreview
});

export default connect(mapStateToProps)(CollectionOverview);