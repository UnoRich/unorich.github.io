import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Profile from 'components/ContentComponents/Profiles/Profile';
import Life from 'components/ContentComponents/Lifes/Life';
import FinnAndJakeImg from 'assets/Finn-and-jake.png';

const Div = styled.div`
  position: relative;
  min-height: 850px;
  overflow: hidden;
`;

const FinnAndJake = styled.img`
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

const waveMove = keyframes`
  from {
    left: -200px;
  }
  to {
    left: -100px;
  }
`;

const WaveLayout = styled.div`
  position: absolute;
  top:49%
  width: 130%
  height: fit-contet;
  animation: ${waveMove} 5s linear 1s infinite alternate;
  z-index: -1;
  transform: rotate(180deg);
`;

const NightSky = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background-color: black;
  z-index: -1;
`;

class ContentComponent extends Component {
  render() {
    return (
      <Div class={ContentComponent}>
        <NightSky />
        <WaveLayout>
          <svg
            class="wave-1hkxOo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              class="wavePath-haxJK1"
              d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
              fill="currentColor"
            />
          </svg>
        </WaveLayout>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/life" component={Life} />
        </Switch>
        <FinnAndJake src={FinnAndJakeImg} />
      </Div>
    );
  }
}

export default ContentComponent;
