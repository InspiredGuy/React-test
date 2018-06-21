import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerForBrowser} from 'redux-little-router';
import rootReducer from './reducers'

const initialState = {};

const routes = {
    '/': {
        title: 'GitHub Repository List'
    },
    '/contributors/:owner/:repo': {
        title: 'Contributors List'
    },
    '/favourites': {
        title: 'Favourite Repositories List'
    }
};

const {reducer, middleware, enhancer} = routerForBrowser({
    routes
});

const store = createStore(
    combineReducers({router: reducer, rootReducer}),
    initialState,
    compose(enhancer, applyMiddleware(middleware, thunk))
);

export default store
