import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './Content/css/custom.css';

import App from './Components/App';
import { Home, Login, NotFound } from './Views';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />

      <Route exact path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>

      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
