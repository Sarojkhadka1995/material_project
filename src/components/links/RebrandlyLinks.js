import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import {Card,CardActions} from 'material-ui/Card';

import Header from '../Header'
import {Link} from 'react-router-dom';

  class RebrandlyLinks extends Component {
    //   list={
    //       title:"Saroj",
    //       destination:"Sanepa"
    //   }
      constructor(props){
          super(props)
          this.state={
             // sidearOpen:false,
              links:[]
          }
      }
    render(){
        return (
            <div><Header/>
                {/* <div>
                    <AppBar title="Rebrandly Links"
                    onLeftIconButtonClick={()=>this.toggleSidebar()}/>
                    <Drawer open={this.state.sidebarOpen}
					docked={false}
					onRequestChange={()=>this.toggleSidebar()}
				    >
                    <MenuItem><Link to="/dashboard">Main page</Link></MenuItem>
                    </Drawer>
                </div> */}
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow> 
                                <TableHeaderColumn>title</TableHeaderColumn>
                                <TableHeaderColumn>destination</TableHeaderColumn>
                                <TableHeaderColumn>shortUrl</TableHeaderColumn>
                                <TableHeaderColumn>Options</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                this.state.links.map(link =>{
                                    return (
                                        <TableRow>
                                            <TableHeaderColumn>{link.title}</TableHeaderColumn>
                                            <TableHeaderColumn>{link.destination}</TableHeaderColumn>
                                            <TableHeaderColumn>{link.shortUrl}</TableHeaderColumn>
                                            <TableHeaderColumn>
                                                <Card>
                                                    <CardActions>
                                                        <FlatButton label="EDIT" onClick={()=>this.edit()}/>
                                                    </CardActions>
                                                </Card>
                                            </TableHeaderColumn>
                                        </TableRow>
                                    )    
                                })
                            }
                        </TableBody>        
                    </Table>
            
                </div>
            </div>
        )
    }
  edit(){
      this.props.history.push("/links/edit")
  }
    // togglebarSidebar(){
    //     this.setState=({sidebarOpen:!this.state.sidebarOpen})
    // }    
    componentWillMount(){
        console.log(sessionStorage.getItem('apikey'))
        fetch('https://api.rebrandly.com/v1/links', 
        {
            headers: {
                        apikey: sessionStorage.getItem('apikey') 
                }
        })
        .then(response=>{
            if(response.ok){
                response.json()
                .then(data =>{
                    this.setState({
                        links:data
                    })
                })
            }
            console.log('data',response)
        })
        
    }
  }    
export default RebrandlyLinks ;
