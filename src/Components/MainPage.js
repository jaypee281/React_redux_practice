import React, {Component} from 'react'
import AddUser from './AddUser'
import {Route} from 'react-router-dom'
import Login from "./Login";
import User from './User';
import UserSettings from "./UserSettings"
import  {withRouter} from 'react-router'
import _users from '../Data/userDetails';

class MainPage extends Component {
    constructor() {
        super()
       
        this.authenticate=this.authenticate.bind(this);
    }
    authenticate(username,password){
        let us=username
        let ps=password;
        let state=_users;
        let st=state.users;
        var auth=false;
           for(var i=0;i<st.length;i++){
           if(st[i].userName=== us && st[i].Password=== ps)
           {
            this.props.updateCurrentUser(username);
            this.props.history.push('/User')
            auth=true;
           }
            }
            if(!auth){
                alert("User Does not exist")
            }
        
            
    }

    render() {
        return ( 
        
        <div>
            <Route exact path = "/" render={() => (
                 <div>
                     <Login onAuthenticate={(username,password)=>this.authenticate(username,password)}></Login>
                 </div>

            )}/> 

            <Route path= "/AddUser" render = {() => (
                <AddUser {...this.props}/>
            )}/>

            <Route path = "/User" render={() => (
                 <div>
                     <User {...this.props}></User>
                 </div>

            )}/> 
              <Route path = "/UserSettings" render={() => (
                 <div>
                     <UserSettings {...this.props} ></UserSettings>
                 </div>
                     
            )}/>
         </div>
        )
    }

}


export default  withRouter(MainPage);