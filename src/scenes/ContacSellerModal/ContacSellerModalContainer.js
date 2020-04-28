import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import ContacSellerModalView from './ContacSellerModalView';
import {productsOperations, productsSelector} from './../../modules/products';

import { routes } from './../router';
import Api from './../../Api';

const mapStateToProps = (state, { productId }) => ({
    product: productsSelector.getProduct(state, productId),
    owner:   productsSelector.getProductOwner(state, productId),
});

const mapDispatchToProps = {};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        submit: props => () => {
            if(!props.product.chatId) {
                //TODO: create chat and send message
            }
            
            //TODO: send message and navigate to chat
        }
    }),
    withProps( 
        (props) => ({disabled: props.text.trim().length === 0})
    )
      
)

export default enhancer(ContacSellerModalView);