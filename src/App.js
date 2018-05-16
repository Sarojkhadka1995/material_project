import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './component/Login'
import Dashboard from './component/Dashboard';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter> 
          <Switch> 
            <Route path= "/login" component={Login}/>
             <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
               <Route path= "/dashboard" component={Dashboard}/>
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>

    );
  }
}

export default App;

