import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../router';
import ProfileView from './ProfileContainer';
 
const mapStateToProps = (state) => ({
   
});

const mapDispatchToProps = {
    
};

const enhance = compose(
    withRouter
);

export default enhance(ProfileView);

