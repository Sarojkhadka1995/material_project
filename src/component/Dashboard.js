import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import RebrandlyLinks from './links/RebrandlyLinks';


class Dashboard extends Component {
  render() {
    return (
      <div>
      
        <Header />

        <RebrandlyLinks/>
        
      </div>
    )
  }
}

export default Dashboard;