import {connect} from 'react-redux';
import {compose} from 'recompose';
import AddProductView from './AddProductView';
import {productsActions, productsActions} from './../../modules/products';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, props) => ({

    
});

const mapDispatchToPRops = {
  addProduct: productsActions.addProduct
}
const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToPRops),
    
)

export default enhancer(AddProductView);