import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import NotFound from "./components/pages/NotFound";

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Provider>
          <Router>
                <div>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Contacts}
                            />

                            <Route
                                exact
                                path="/contact/add"
                                component={AddContact}
                            />

                            <Route
                                exact
                                path="/about"
                                component={About}
                            />

                            <Route
                                component={NotFound}
                            />
                        </Switch>
                    </div>
                </div>
          </Router>
      </Provider>
  );
}

export default App;