import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this);
    }
handleSubmit(event){
    event.preventDefault();
    const username=event.target.elements.userName.value
    const password=event.target.elements.Password.value
    if (username.length>5 &&password.length>5){
        this.props.onAuthenticate(username,password);
    }
    else
    alert("UserName or Password Invalid")
}


    render(){
        return <div className="form">
            <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="UserName" name="userName"/>
               <input type ="password" placeholder="Password" name="Password"/>
               <button> Login </button>
            </form>
            <p>New to the page? Click below to Join</p>
            <Link to="/AddUser"> <button>Sign Up </button></Link> 
          </div>
    }
}
export default Login;
