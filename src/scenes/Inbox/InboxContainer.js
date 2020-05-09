import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';
import Inbox from './InboxView';
import {chatsOperations, chatsSelectors} from './../../modules/chats';

import { routes } from './../router';
import Api from './../../Api';

const mapStateToProps = (state, props) => ({
    isLoading: state.chats.fetchChats.isLoading,
    items: chatsSelectors.getChatsWithLastMessage(state),
});

const mapDispatchToProps = {
    fetchChats: chatsOperations.fetchChats
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.fetchChats();
        }
    })
)

export default enhancer(Inbox);
