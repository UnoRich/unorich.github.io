import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from 'pages/Main';
import store from 'store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
