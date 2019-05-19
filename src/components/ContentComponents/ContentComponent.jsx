import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Profile from 'components/ContentComponents/Profiles/Profile';
import Life from 'components/ContentComponents/Lifes/Life';

const Div = styled.div`
  margin-left: 40px;
`;

class ContentComponent extends Component {
  render() {
    return (
      <Div class={ContentComponent}>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/life" component={Life} />
        </Switch>
      </Div>
    );
  }
}

export default ContentComponent;
