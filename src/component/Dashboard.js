import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';


class Dashboard extends Component {
  render() {
    return (
      <div>
      
        <Header />

        <Body/>
        
      </div>
    )
  }
}

export default Dashboard;