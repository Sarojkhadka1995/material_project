import React,  {Component} from 'react';
//material ui component

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
 
//importing react router	
import {withRouter} from 'react-router';

//importing links
import {Link} from 'react-router-dom'

class Header extends Component{
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false,
			email:'',
			apikey:''
		}
	}
	render(){
		return(
			<div>
				<AppBar title="Welcome to React"
				onLeftIconButtonClick={() => this.toggleSidebar()}
				iconElementRight={
					<FlatButton label="Sign out" onClick={()=>this.signOut()}/>
				}/>
				<Drawer open={this.state.sidebarOpen}
					docked={false}
					onRequestChange={()=>this.toggleSidebar()}
				>
					<MenuItem>About React</MenuItem>
					<MenuItem>Tutorial</MenuItem>
					<MenuItem>Documentation</MenuItem>
					<MenuItem><Link to="/links">Links</Link></MenuItem>
					<MenuItem><Link to="/links/new">Create link</Link></MenuItem>
				</Drawer>
			</div>
		)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
		}
	componentWillMount(){
		this.setState({
			apikey:sessionStorage.getItem('apikey')
			})
	}
	signOut() {
		sessionStorage.clear();
		console.log(this.props.history)
		this.props.history.push('/login')
 	}
}
	
export default withRouter(Header) 