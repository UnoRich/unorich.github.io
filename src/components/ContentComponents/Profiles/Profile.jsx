import React, { Component } from 'react';
import TitleComponent from 'components/TextComponents/TitleComponent';
import SubTitleComponent from 'components/TextComponents/SubTitleComponent';
import HIghliteComponent from 'components/TextComponents/HighlightComponent';
import ProfilePicture from 'components/ContentComponents/Profiles/ProfilePicture';
import styled from 'styled-components';

const Div = styled.div({
  padding: 40,
  position: 'relative',
  zIndex: 1,
  '.sub-title': {
    fontWeight: 'bold',
    paddingTop: 30,
    color: 'pink',
  },
});

const StyledDescription = styled.div({
  fontSize: 21,
  paddingTop: 10,
  color: '#e8e8e8',
  fontWeight: 'bolder',
  '.dimtext': {
    fontSize: 19,
    color: '#b18c8c',
  },
  '.title-description': {
    marginTop: 10,
  },
});

const StyledDetailDescription = styled.span({
  fontSize: 16,
  lineHeight: 2,
  fontWeight: 'normal',
});

class Profile extends Component {
  render() {
    return (
      <Div className="profile">
        <TitleComponent title="Wonyeong Jung (Warren Jung)" />
        <ProfilePicture />
        <HIghliteComponent highlite="Software Developer" />
        <SubTitleComponent subtitle="PERSONAL SUMMARY" />
        <StyledDescription>
          Love Web platform. <br/>
          Interested in developing culture by integrating programming with dance and music.
        </StyledDescription>
        <SubTitleComponent subtitle="EXPERIENCE" />
        <StyledDescription>
          <div className='title-description'>
            Samsung Electronics / Performance Analyst<br/>
          </div>
          <span className='dimtext'>
            MAY 2017 - PRESENT, Suwon<br/>
          </span>
          <StyledDetailDescription>
            - Enhancing web browser performance<br/>
            - Develop monitoring system of web browsing performance<br/>
            - Migrating Engine code from Chromium<br/>
            - Implementing & Managing user privacy feature<br/>
          </StyledDetailDescription>
          <div className='title-description'>
            LG CNS / Intern<br/>
          </div>
          <span className='dimtext'>
            NOVEMBER 2015 - JANUARY 2016, Seoul<br/>
          </span>
          <StyledDetailDescription>
            - Testing pay service of ‘Kakao‘<br/>
          </StyledDetailDescription>
        </StyledDescription>
      <SubTitleComponent subtitle="EDUCATION" />
        <StyledDescription>
          <div className='title-description'>
            Korea University / Bachelor’s Degree<br/>
          </div>
          <span className='dimtext'>
            MAY 2010 - Feburary 2017, Seoul<br/>
          </span>
          <StyledDetailDescription>
            Majoring computer science and Software Venture for sub major.<br/>
          </StyledDetailDescription>
        </StyledDescription>
        <SubTitleComponent subtitle="TECHNOLOGIES" />
        <StyledDescription>
          <span>
            JAVA, C++, React, Vue, Node JS
          </span>
        </StyledDescription>
        <SubTitleComponent subtitle="PROJECTS" />
        <StyledDescription>
        <div className='title-description'>
            MusicAnalyzer / Team Leader, Developer<br/>
          </div>
          <span className='dimtext'>
            Jun 2016 - Sep 2017∙Seoul, S.Korea<br/>
          </span>
          <StyledDetailDescription>
            - Project Repository https://github.com/Lyceum519/MusicAnalyzer<br/>
            - By anaylzing music we tried to specify every point as 'Kick', 'Snare', 'Hi-hat' and othersbr/>
          </StyledDetailDescription>
          <div className='title-description'>
            Gimci / Developer<br/>
          </div>
          <span className='dimtext'>
            Jan 2016 - Feb 2017∙Seoul, S.Korea<br/>
          </span>
          <StyledDetailDescription>
            - Project Repository https://github.com/gimci/gimci<br/>
            - Project Gimci.js: Korean nautral language processor built on top of Node.js<br/>
            - Gained a research fund (undergraduate research program) from Korea University (2016) conducting a study with it "Performance optimaization on Korean text using letter-based romanization"<br/>
            - D2 Campus Fest 2017 (Open Source Competition by held “Naver”) Finalist<br/>
          </StyledDetailDescription>
        </StyledDescription>
      </Div>
    );
  }
}

export default Profile;
