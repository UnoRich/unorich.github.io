import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderComponent from 'components/HeaderComponents/HeaderComponent';
import ContentComponent from 'components/ContentComponents/ContentComponent';
import TailComponent from 'components/TailComponentns/TailComponent';
import NightSky from 'components/StarField/NightSky';

const StarField = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #202225;
  overflow: auto;
`;

const Home = () => {
  return (
    <>
    <StarField className="home">
      <NightSky />
      <HeaderComponent />
      <ContentComponent />
      <TailComponent />
    </StarField>
    </>
  );
};

export default Home;
