import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div({
  display: 'inline-block',
  color: 'white',
  fontSize: 50,
  fontWeight: 'bold',
});

const TitleComponent = props => {
  return <TitleStyle className="title">{props.title}</TitleStyle>;
};

export default TitleComponent;
