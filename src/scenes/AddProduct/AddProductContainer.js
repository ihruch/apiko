import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import AddProductView from './AddProductView';
import { productsOperations } from './../../modules/products';
import { withRouter } from 'react-router-dom';
import { routes } from './../router';


const mapDispatchToPRops = {
  addNewProduct: productsOperations.addProduct
}
const enhancer = compose(
    withRouter,
    connect(null, mapDispatchToPRops),
    withHandlers({
        handleAddProduct: (props) => async (values) => {
            await props.addNewProduct(values);
            props.history.push(routes.home); 
        },
        goBack:(props) => (e) => {
            if(e.target.getAttribute('data-popup')) {
                e.stopPropagation();
                props.history.goBack();
            }
        }
    })     
)

export default enhancer(AddProductView);