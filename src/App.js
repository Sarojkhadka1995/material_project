import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import RebrandlyLinks from './components/links/RebrandlyLinks';
import CreateRebrandlyLink from './components/links/CreateRebrandlyLink';
import Editlink from './components/links/Editllink';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter> 
          <Switch> 
            <Route path= "/login" component={Login}/>
             <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
               <Route path= "/dashboard" component={Dashboard}/>
               <Route exact path="/links" component={RebrandlyLinks}/>
               <Route path="/links/new" component={CreateRebrandlyLink}/> 
               <Route path="/links/edit" component={Editlink}/>        
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    )
  }
}

export default App;

