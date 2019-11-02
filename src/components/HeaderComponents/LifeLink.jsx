import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LifeImg from 'assets/img_life.jpeg';

const Div = styled.div`
  display: inline;
  position: relative;
  height: 15opx;
  width: 200px;
  background-image: url('${LifeImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LinkText = styled.h1`
  letter-spacing: 3px;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  pointer-events: none;
`;

const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: #202225;
  opacity: 0.4;
  &:hover {
    opacity: 0;
    cursor: pointer;
  }
`;

const WhiteBox = styled.div`
  border: 2px solid;
  border-color: white;
  width: 120px
  height: 50px
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:10;
  pointer-events: none;
`;

class LifeLink extends Component {
  constructor() {
    super();
    this.state = {
      onMouseOver: false,
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleLink() {
    window.location.hash = 'life';
  }

  handleMouseOver() {
    this.setState({ onMouseOver: true });
  }

  handleMouseOut() {
    this.setState({ onMouseOver: false });
  }

  render() {
    return (
      <Div
        className="LifeLink"
        onClick={this.handleLink}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <BackDrop />
        <LinkText>
          <Link to="life" style={{ color: 'white' }}>
            LIFE
          </Link>
        </LinkText>
        {this.state.onMouseOver && <WhiteBox />}
      </Div>
    );
  }
}

export default LifeLink;
