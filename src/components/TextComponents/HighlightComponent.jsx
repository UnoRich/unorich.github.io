import React from 'react';
import styled from 'styled-components';

const HighliteStyle = styled.div`
  color: red;
  font-size: 24px;
`;

const HighliteComponent = props => {
  return (
    <div className="highlited">
      <HighliteStyle>{props.highlite}</HighliteStyle>
    </div>
  );
};

export default HighliteComponent;
