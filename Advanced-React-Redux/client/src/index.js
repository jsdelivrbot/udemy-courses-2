import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

// Initiliaze state to check if there is a stored jwt token for the user
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={Feature} />
        <Route path='/signout' component={Signout} />
        <Route path='/signin' component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

