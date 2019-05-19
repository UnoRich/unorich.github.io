import React, { Component } from 'react';
import styled from 'styled-components';
import LifeLink from './LifeLink';
import MainLink from './MainLink';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
`;

class HeaderComponent extends Component {
  render() {
    return (
      <Div class="header">
        <MainLink />
        <LifeLink />
      </Div>
    );
  }
}

export default HeaderComponent;
