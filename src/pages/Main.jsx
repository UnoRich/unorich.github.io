import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, Resume } from 'pages';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
