import {createStore, applyMiddleware} from 'redux';
import {myReducer} from './reducers';
import thunk from 'redux-thunk'

//import redux dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    myReducer,
    /* preloadedState, */
    composeWithDevTools(

        applyMiddleware(thunk)
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
  