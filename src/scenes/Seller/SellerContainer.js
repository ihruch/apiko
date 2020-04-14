import {compose, lifecycle }  from 'recompose'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import SellerView from './SellerView';
import {productsOperations, productsSelector} from './../../modules/products';


const mapStateToProps = (state, props) => ({
    seller: productsSelector.getSeller(state, props.match.params.id),
    list: productsSelector.getSellerProducts(state)
});

const mapDispatchToProps = {
    fetchSeller: productsOperations.fetchSeller,
    fetchSellerProducts: productsOperations.fetchSellerProducts
};

const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() { 
            console.log('componentDidMount', this.props)  
            this.props.fetchSellerProducts(this.props.match.params.id);

            if(!this.props.seller ){
                this.props.fetchSeller(this.props.match.params.id);       
            }
        }
    })
);

export default enhance(SellerView);

