import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import store, { history } from './core/store/store';
import Main from './shared/layout/Main';
import GlobalStyles from './shared/styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Main />
        <ToastContainer autoClose={4000} />
      </Router>
    </Provider>
  );
};

export default App;
