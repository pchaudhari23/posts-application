import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
// import { Provider } from 'react-redux';
// import configureAppStore from './store/configureStore';

// const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
