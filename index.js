import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './src/i18n';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './src/store';
import Layout from './src/Layout';
import ScrollToTop from './src/components/ScrollToTop';
const App = () => (
  <Suspense fallback="loading">
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      </Router>
    </Provider>
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));
