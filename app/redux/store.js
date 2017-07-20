import { createStore } from 'redux';
import io from 'socket.io-client';

const reducer = (state = { arrNum: [] }, action ) => {
    if (action.type === 'ADD_NUM') return { arrNum: [action.num].concat(state.arrNum) };
    return state;
};

const store = createStore(reducer);

const socket = io('http://localhost:3000');
socket.on('SERVER_SEND_MESSAGE', num => store.dispatch({ type: 'ADD_NUM', num }));

export default store;
