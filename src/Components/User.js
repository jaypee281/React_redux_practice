import React from 'react';
import {Link} from 'react-router-dom'
import _users from '../Data/userDetails';
const currentUser=_users.currentUser;
function User(props){
        return<div className="header">
            <p>Welcome {_users.currentUser}</p>
            <Link to="/"> <button>Logout </button></Link> 
            <Link to="/UserSettings"> <button>User Settings </button></Link> 
        </div>
    }

export default User;