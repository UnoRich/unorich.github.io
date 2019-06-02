import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainImg from 'assets/img_main.jpeg';

const Div = styled.div`
  border: 1px outset white;
  position: relative;
  height: 225px;
  width: 300px;
  background-image: url('${MainImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: yellow;
  }
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

class MainLink extends Component {
  constructor() {
    super();
    this.handlelink = this.handleLink.bind(this);
  }

  handleLink() {
    window.location.hash = '/';
  }

  render() {
    return (
      <Div class="MainLink" onClick={this.handleLink}>
        <BackDrop />
        <LinkText>
          <Link to="/" style={{ color: 'white' }}>
            HOME
          </Link>
        </LinkText>
      </Div>
    );
  }
}

export default MainLink;
