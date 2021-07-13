import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from 'react-redux';

import { setAuthToken } from './redux/helpers';
import store from './redux/store';
import * as Pages from './components/pages';
import { Header, PrivateRoute } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <Header />
            <div className="mu-block">
            <Switch>
              { Object.values(Pages)
                  .map((pageObj) => (
                    pageObj.isPrivate ? 
                    <PrivateRoute exact key={uuidv4()} {...pageObj} /> : 
                    <Route exact key={uuidv4()} {...pageObj} />
                  ))
              }
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
