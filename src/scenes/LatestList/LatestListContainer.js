import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose'
import LatestListView from './LatestListView';
import {productsOperations, productsSelector} from './../../modules/products';

const mapStateToProps = (state) => {
    return {
        isLoading: state.products.latest.isLoading,
        list :  productsSelector.getLatest(state),    
    }
};

const mapDispatchToPRops = {
    fetchLatest: productsOperations.fetchLatest
}

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToPRops),
    lifecycle({
        componentDidMount() {
            this.props.fetchLatest();
        }
    })
)

export default enhancer(LatestListView);