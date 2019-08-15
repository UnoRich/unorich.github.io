import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
`;

class TailComponent extends Component {
  render() {
    return (
      <Div className="tail">
        Tail
      </Div>
    );
  }
}

export default TailComponent;
