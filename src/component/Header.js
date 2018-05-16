import React,  {Component} from 'react';
//material ui component

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


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
					<MenuItem>Links</MenuItem>
				</Drawer>
			</div>
		)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
		}
	componentWillMount(){
		this.setState({
			email:sessionStorage.getItem('email')
			})
		}
	signOut() {
		sessionStorage.clear();
		this.props.history.push('/')
 	}
}
	
export default Header; 