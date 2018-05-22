import React, {Component} from 'react';

// Material UI component
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'

import Header from '../Header'

// Service
import RebrandlyApi from '../../services/RebrandlyApi';

//importing react-router-dom
// import {Link} from 'react-router-dom';

class CreateRebrandlyLink extends Component{
    constructor(props){
        super(props)
        this.state={
            destination:'',
            title:''
        }
    }
     render(){
        return(
            <div>
                <Header/>
                <Card style={{margin: "20px 10px 0 10px"}}>
                    <CardHeader
                        title="Create New link"
                        />
                    <CardText>
                        <TextField 
                            style={{width:"100%"}}
                            floatingLabelText="Title"
                            value={this.state.title}
                            onChange={(e)=>this.titlechange(e)}
                        /><br/>
                        <TextField
                            style={{width:"100%"}}
                            floatingLabelText="Destination"
                            value={this.state.destination}
                            onChange={(e)=>this.destinationchange(e)}
                        />
                    </CardText>
                    <CardActions>
                        <FlatButton label="Submit" onClick={()=>this.onSubmit()}/>
                    </CardActions>
                </Card>
            </div>
        )
    }

    titlechange(e){
        this.setState({title:e.target.value})
    }

    destinationchange(e){
        this.setState({destination:e.target.value})
    }

    onSubmit(){
        const data={
            title:this.state.title,
            destination:this.state.destination
        }
        RebrandlyApi.post('/links',{body:data})
        .then(()=>{this.props.history.push("/links")
        })
        .catch(err=>{
            alert(err.message)
        })
    }
}

export default CreateRebrandlyLink ;