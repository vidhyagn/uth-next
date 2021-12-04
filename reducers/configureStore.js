import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
//import logger from 'redux-logger'
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
 //   const { logger } = require(`redux-logger`);

   // middlewares.push(logger);
}

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
