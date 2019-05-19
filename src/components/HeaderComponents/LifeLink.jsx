import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 5px outset red;
  &:hover {
    background-color: yellow;
  }
`;

class LifeLink extends Component {
  render() {
    return (
      <Div class="LifeLink">
        <h>LifeLink</h>;
      </Div>
    );
  }
}

export default LifeLink;
