import React, {Component} from  'react';
// material ui 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardTitle, CardText,CardActions} from 'material-ui/Card';
//impporting RebrandlyApi
import RebrandlyApi from '../services/RebrandlyApi'
class Login extends Component{

  aligncenter={
    height:"50vh",
    display:"flex",
    justifyContent: "center",
    alighItems: "center"
  }

  cardWidth={
    width:"500px"
  }
  
  floatbutton={
    float:"right"
  }
	constructor(props){
		super(props)
		this.state= {
			email: 'ram', 
			apikey: ''
		}
	}
	render(){
		return(
       <div style={this.aligncenter}>
        <Card style={this.cardWidth}>
        <CardHeader
            title="React"
            subtitle="New world of react"
          />
          <CardTitle title="Login"/>
          <CardText>
            <TextField  
              type= "email"
              fullwidth={true}
              floatingLabelText="Email id"
              value={this.state.email}
              onChange={(e)=>this.handleemail(e)}
            /><br/>
            <TextField
              type="password"
              fullwidth={true}
              floatingLabelText="Apikey"
              value={this.state.apikey}
                onChange={(a)=>this.handlepassword(a)}
              />
          </CardText>
          <CardActions>
            <RaisedButton label="Login" primary={true} onClick={ ()=> this.submitForm()}/>
          </CardActions>
        </Card>
        </div>
      )
  }

handleemail(e){
  this.setState({email:e.target.value})
}

handlepassword(a){
  this.setState({apikey:a.target.value})
}

submitForm(){
  this.validate_apikey(this.state.apikey)
  .then((response) =>{
    if (response.ok){
      return response.json()
      .then((data)=>{
        if(data.email === this.state.email){
          sessionStorage.setItem("apikey",this.state.apikey)
          this.props.history.push("/dashboard")
        }
        else{
          alert("User not found")
        }
      })
    }
    else{
      alert(response.statusText)
    }
  })
}

component_willmount(){
  const savedapikey= sessionStorage.getItem("apikey")
  if(savedapikey){
    this.validate_apikey(savedapikey)
    .then((response)=>{
      if(response.ok){
        this.props.history.push("/dashboard")
      }
    })
  }
}

validate_apikey(apikey){
  return fetch('https://api.rebrandly.com/v1/account',
  {
    header:{
      apikey:apikey
    }
  }) 
}

}
export default Login;