import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import blogReducer from './reducers/blogReducer';
import notificationReducer from './reducers/notificationReducer';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    login: loginReducer,
    users: userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// ? Question: Is this right? The actual course material doesn't actually go over how to 'move defining the store to a file called store.js'
