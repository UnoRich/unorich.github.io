import React from 'react';
import HeaderComponent from 'components/HeaderComponents/HeaderComponent';
import ContentComponent from 'components/ContentComponents/ContentComponent';
import TailComponent from 'components/TailComponentns/TailComponent';

const Home = () => {
  return (
    <div class="home">
      <HeaderComponent />
      <ContentComponent />
      <TailComponent />
    </div>
  );
};

export default Home;
