import React from 'react';
import styled from 'styled-components';
import LineForSubTitle from 'components/LineComponents/LineForSubTItle';

const SubTitleStyle = styled.div`
  color: white;
  font-size: 30px;
`;

const SubTitleComponent = props => {
  return (
    <div class="sub-title">
      <SubTitleStyle>{props.subtitle}</SubTitleStyle>
      <LineForSubTitle />
    </div>
  );
};

export default SubTitleComponent;
