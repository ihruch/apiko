import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import AddProductView from './AddProductView';
import { productsOperations } from './../../modules/products';
import { withRouter } from 'react-router-dom';
import { routes } from './../router';

// const mapStateToProps = (state, props) => ({ });

const mapDispatchToPRops = {
  addNewProduct: productsOperations.addProduct
}
const enhancer = compose(
    withRouter,
    connect(null, mapDispatchToPRops),
    withHandlers({
        handleAddProduct: (props) => async (values) => {
            console.log('handleAddProduct', values)
            await props.addNewProduct(values);
            props.history.push(routes.home); 
        }
    })     
)

export default enhancer(AddProductView);