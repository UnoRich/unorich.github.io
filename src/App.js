import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from 'pages/Main';
import store from 'store';
import './App.css';
import 'styles/GlobalStyle.css';

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <HashRouter basename={'/'}>
          <Main />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
