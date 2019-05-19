import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
    background-color: yellow;
  }
`;

class TailComponent extends Component {
  render() {
    return (
      <Div class="header">
        <h>Tail</h>
      </Div>
    );
  }
}

export default TailComponent;
