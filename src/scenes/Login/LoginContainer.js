import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Login from './LoginView';
import { authOperations } from '../../modules/auth';
import { withRouter } from 'react-router-dom';
import { routes } from '../router';


const mapStateToProps = (state,action) => ({
    isLoading: state.auth.login.isLoading
});

const mapDispatchToProps = {
    login: authOperations.login
};

const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withStateHandlers(
        { 
            fields: {
                email: '',
                password: ''
            }
        },{
            handleFieldsChange: (state) => (fieldName, value) => ({
                ...state,
                fields: {
                    ...state.fields,
                    [fieldName]: value
                }
            })
        }
    ),
    withHandlers({
        handleLogin: (props) => async () => {
            await props.login(props.fields);
            props.history.push(routes.home); 
        }
    })
);

export default enhance(Login);

