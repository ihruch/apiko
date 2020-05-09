import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { messagesOperations, messagesSelectors } from './../../modules/messages';
import { routes } from './../router';
import Api from './../../Api';
import {withRouter} from 'react-router-dom';
import ChatView from './ChatView';

const mapStateToProps = (state, props) => ({
    items: messagesSelectors.getMessages(state, props.match.params.id),
    isLoading: state.messages.fetchMessages.isLoading,
});

const mapDispatchToProps = {
    fetchMessages: messagesOperations.fetchMessages,
    sendMessage: messagesOperations.sendMessage,
};


const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        sendMessage: props => () => {
            props.sendMessage(props.match.params.id, props.text);
            props.setText('');
        }
    }),
    lifecycle({
        async componentDidMount() {
            try {
                await this.props.fetchMessages(this.props.match.params.id);
            } catch (error) {
                console.log('error', error.message)
            }
        }
    })


)

export default enhancer(ChatView);
