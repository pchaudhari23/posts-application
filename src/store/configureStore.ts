// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createInjectorsEnhancer } from 'redux-injectors';
// import createSagaMiddleware from 'redux-saga';

// import createReducer from './reducers';
// import rootSaga from "../sagas/index";

// export default function configureAppStore(initialState = {}) {
//     const reduxSagaMonitorOptions = {};
//     const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
//     const { run: runSaga } = sagaMiddleware;

//     // Create the store with saga middleware
//     const middlewares = [sagaMiddleware];

//     const enhancers = [
//         createInjectorsEnhancer({
//           createReducer,
//           runSaga,
//         }),
//     ];

//     const store = configureStore({
//         reducer: createReducer(),
//         middleware: [...getDefaultMiddleware(), ...middlewares],
//         preloadedState: initialState,
//         devTools: process.env.NODE_ENV !== "production",
//         enhancers,
//       });
      
//       sagaMiddleware.run(rootSaga);
      
//       return store;

// }