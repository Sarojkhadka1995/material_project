import React, { Component } from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

  import {Header} from '../Header'

  class RebrandlyLinks extends Component {
   links=[
       {
           "title":"Link ijj4f",
           "destination": "https://www.youtube.com/watch?v=3VmtibKpmXI",
           "shortUrl": "rebrand.ly/ijjj4f"
       }
   ]
    render(){
        return (
            <div>
                <Table>
					<TableHeader>
  						<TableRow> 
                			<TableHeaderColumn>title</TableHeaderColumn>
        					<TableHeaderColumn>destination</TableHeaderColumn>
        					<TableHeaderColumn>shortUrl</TableHeaderColumn>
						</TableRow>
    				</TableHeader>
                    <TableBody>
                        {
                            this.links.mpas(link =>{
                                return (
                                    <TableRow>
                                        <TableHeaderColumn>{link.title}</TableHeaderColumn>
                                        <TableHeaderColumn>{link.destination}</TableHeaderColumn>
                                        <TableHeaderColumn>{link.shortUrl}</TableHeaderColumn>
                                     </TableRow>
                                )    
                            })
                        }
                    </TableBody>        
				</Table>
         
            </div>
        )
    }


    componentWillMount(){
        fetch('https://api.rebrandly.com/v1/links', 
        {
            headers: {
                        apikey: sessionStorage.getItem('apikey') 
                }
        })
        .then()
    }
  }    
export default RebrandlyLinks ;
