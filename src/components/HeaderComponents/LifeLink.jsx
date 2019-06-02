import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LifeImg from 'assets/img_life.jpeg';

const Div = styled.div`
  border: 1px outset white;
  display: inline;
  position: relative;
  height: 225px;
  width: 300px;
  background-image: url('${LifeImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LinkText = styled.h1`
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
  &:hover {
    opacity: 0;
  }
`;

class LifeLink extends Component {
  constructor() {
    super();
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink() {
    window.location.hash = 'life';
  }

  render() {
    return (
      <Div class="LifeLink" onClick={this.handleLink}>
        <BackDrop />
        <LinkText>
          <Link to="life" style={{ color: 'white' }}>
            LIFE
          </Link>
        </LinkText>
      </Div>
    );
  }
}

export default LifeLink;
