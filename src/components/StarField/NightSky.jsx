import React, { Component } from 'react';
import styled from 'styled-components';
import StarsNear from './StarsNear';
import StarsMiddle from './StarsMiddle';
import StarsFall from './StarsFall';

const NightSkyStyle = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

class NightSky extends Component {
  render() {
    return (
      <NightSkyStyle class="night-sky">
        <StarsNear />
        <StarsMiddle />
        <StarsFall />
      </NightSkyStyle>
    );
  }
}

export default NightSky;
