import React, {Component} from 'react';

//importing UI Component
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

//importing RebrandlyLinks.js
import RebrandlyLinks from './RebrandlyLinks';

// Service
import RebrandlyApi from '../../services/RebrandlyApi';

class Editlink extends Component{
    constructor(props){
        super(props)
        this.state={
            title:this.props.list.title,
            destination:this.props.list.destination
        }
    }
    render(){
        return(
            <div>
                <Card style={{margin:"20px 10px 0px 10px"}}>
                <CardHeader
                    title= "Edit links"
                />
                <CardText>
                    <TextField
                        style={{width:"100%"}}
                        floatingLabelText="Titile"
                        value={this.state.title}
                        onChange={(e)=>this.titlechange(e)}
                    />
                    <TextField
                        style={{width:"100%"}}
                        floatingLabelText="Destination"
                        value={this.state.title}
                        onChange={(e)=>this.destinationchange(e)}
                    />
                </CardText>
                <CardActions>
                    <FlatButton label="Submit" onClick={()=>this.submit()}/>
                </CardActions>
            </Card>
        </div>
        )
    }

    titlechange(e){
        this.setstate({title:e.target.value})
    }

    destinationchange(e){
        this.setstate({destination:e.target.value})
    }

    submit(){
        const data={
            title: this.state.title,
            destination: this.state.destination
        }
        RebrandlyApi.post("/links",{body:data})
        .then(()=>{this.props.history.push("/links")
        })
        .catch(err=>{
            alert(err.message)
        })
    }
}

export default Editlink ;
