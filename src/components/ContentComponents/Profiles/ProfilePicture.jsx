import React, { Component } from 'react';
import styled from 'styled-components';
import LifeImg from 'assets/profile.jpeg';

const ImgStyle = styled.img`
  border-radius: 50%;
  width: 200px;
  heigth: 200px;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  float: right;
  margin-right: 50px;
`;

class ProfilePicture extends Component {
  render() {
    return (
      <ImgWrapper className="profile-picture">
        <ImgStyle src={LifeImg} />
      </ImgWrapper>
    );
  }
}

export default ProfilePicture;
