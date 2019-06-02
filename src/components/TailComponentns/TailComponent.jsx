import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 5px outset pink;
  &:hover {
    background-color: yellow;
  }
`;

class TailComponent extends Component {
  render() {
    return (
      <Div class="tail">
        <h>Tail</h>
      </Div>
    );
  }
}

export default TailComponent;
