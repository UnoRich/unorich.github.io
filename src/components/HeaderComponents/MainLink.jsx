import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 5px outset red;
  &:hover {
    background-color: yellow;
  }
`;

class MainLink extends Component {
  render() {
    return (
      <Div class="MainLink">
        <h>MainLink</h>;
      </Div>
    );
  }
}

export default MainLink;
