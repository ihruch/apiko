import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose'
import LatestListView from './LatestListView';
import {productsOperations} from './../../modules/products';

const mapStateToProps = (state) => ({
    isLoading: state.products.latest.isLoading,
    list : state.products.latest.items,
});

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