import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import AddProductView from './AddProductView';
import { productsOperations } from './../../modules/products';
import { withRouter } from 'react-router-dom';
import { routes } from './../router';
import Api from './../../Api';

const mapDispatchToPRops = {
  addNewProduct: productsOperations.addProduct
}
const enhancer = compose(
    withRouter,
    connect(null, mapDispatchToPRops),
    withHandlers({
        handleAddProduct: (props) => async (values) => {
         //  console.log('AddProductContainer', values)
            await props.addNewProduct(values);
            props.history.push(routes.home); 
        },
        goBack:(props) => (event) => {
            if(event.target.getAttribute('data-popup')) {
                event.stopPropagation();
                props.history.goBack();
            }
        }
    })     
)

export default enhancer(AddProductView);