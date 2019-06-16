import React, { Component } from 'react';
import TitleComponent from 'components/TextComponents/TitleComponent';
import SubTitleComponent from 'components/TextComponents/SubTitleComponent';
import HIghliteComponent from 'components/TextComponents/HighlightComponent';
import ProfilePicture from 'components/ContentComponents/Profiles/ProfilePicture';
import styled from 'styled-components';

const Div = styled.div`
  padding: 40px;
`;

class Profile extends Component {
  render() {
    return (
      <Div class="profile">
        <TitleComponent title="Wonyeong Jung" />
        <ProfilePicture />
        <HIghliteComponent highlite="Software Developer" />
        <SubTitleComponent subtitle="PERSONAL SUMMARY" />
        <SubTitleComponent subtitle="EXPERIENCE" />
        <SubTitleComponent subtitle="EDUCATION" />
        <SubTitleComponent subtitle="TECHNOLOGIES" />
        <SubTitleComponent subtitle="PROJECTS" />
      </Div>
    );
  }
}

export default Profile;
