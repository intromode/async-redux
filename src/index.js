import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './components/App';

//oh store just takes state and makes it global? so were passing that global state to Provider that wraps app and app holds all other components and thats how they have access to the state???

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import {
//   createStore,
//   applyMiddleware
// } from 'redux';

// //from his notes:
// // store is the redux store
// // next is a function to move to the next middleware
// // action is the dispatched action
// const logger = store => next => action => {
//   console.log('before reducer', store.getState());

//   next(action); //why passing action? dispatch action THEN move to next middleware or?

//   console.log('after reducer', store.getState());
// };

// const logger2 = store => next => action => {
//   console.log('i am another middleware!', action);
//   next(action); 
// };

// function reducer(state = {}, action) {
//   switch(action.type) {
//     case 'HI':
//       return 'hi';
//     default: 
//       return state;
//   }
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(logger, logger2)
// );

// store.dispatch({
//   type: 'HI'
// });

