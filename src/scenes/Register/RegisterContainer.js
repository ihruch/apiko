import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import RegisterView from './RegisterView';
import { authOperations } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

 
const mapStateToProps = state => ({
   isLoading: state.auth.register.isLoading,
   isError: state.auth.register.isError,
   error: state.auth.register.error,
});

const mapDispatchToProps = {
    register: authOperations.register
};

const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        handleSubmit: props => async values => {
            const {fullName, email, password} = values;
            
            await props.register({fullName, email, password});
           
            // if(!props.isError) { 
            //     props.history.push(routes.home) 
            // }
        }
    })
);

export default enhance(RegisterView);

