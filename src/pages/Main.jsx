import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Resume } from 'pages';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default Main;
