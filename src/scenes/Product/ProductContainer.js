import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose'
import {withRouter} from 'react-router-dom';
import ProductView from './ProductView';

import {productsOperations, productsSelector} from './../../modules/products';

const mapStateToProps = (state, props) => ({
    product: productsSelector.getProduct(state, props.match.params.id), 
    owner: productsSelector.getProductOwner(state, props.match.params.id),
    isLoading: state.products.product.isLoading    
});
    

const mapDispatchToPRops = {
    fetchProduct: productsOperations.fetchProduct
}

const enhancer = compose(
   
    withRouter,
    connect(mapStateToProps, mapDispatchToPRops),
    lifecycle({
        componentDidMount() { 
            if(!this.props.owner || !this.props.product){
                this.props.fetchProduct(this.props.match.params.id);       
            }
        }
    })
)

export default enhancer(ProductView);