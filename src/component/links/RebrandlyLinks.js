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
      constructor(props){
          super(props)
          this.state={
              links:[]
          }
      }
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
                            this.state.links.map(link =>{
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
