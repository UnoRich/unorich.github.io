import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  display: inline-block;
  color: black;
  font-size: 50px;
`;

const TitleComponent = props => {
  return <TitleStyle class="title">{props.title}</TitleStyle>;
};

export default TitleComponent;
