import React from 'react';
import {compose} from 'recompose'
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
import {productsSelector} from './../../modules/products';

const mapStateToProps = (state, props) => ({
    product: productsSelector.getProduct(state, props.id)
})

const enhance = compose(
    connect(mapStateToProps, null),
)

export default enhance(ProductItem);
