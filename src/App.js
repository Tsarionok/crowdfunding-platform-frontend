import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from 'react-redux';

import { setAuthToken } from './redux/helpers';
import store from './redux/store';
import { loadUser } from './redux/actions';
import * as Pages from './components/pages';
import { Header } from './components';
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
                        .map(({ path, component }) => <Route exact key={uuidv4()} path={path} component={component} />)
              }
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
