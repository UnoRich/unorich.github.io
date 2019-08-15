import React, { Component } from 'react';

const ButtonToNavigate = ({ title, history }) => (
  <button type="button" onClick={() => history.push('/my-new-location')}>
    {title}
  </button>
);

class Life extends Component {
  render() {
    return <div className="life">Life</div>;
  }
}

export default Life;
