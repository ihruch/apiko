import {connect} from 'react-redux';
import {compose} from 'recompose'
import AddProductView from './AddProductView';


const mapStateToProps = (state) => ({
  
});

const mapDispatchToPRops = {
  
}
const enhancer = compose(
    connect(mapStateToProps, mapDispatchToPRops),
    
)

export default enhancer(AddProductView);