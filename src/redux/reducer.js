import {combineReducers } from 'redux';
import _users from '../Data/userDetails';
 const postReducer = function posts(state = _users, action) {
 switch(action.type) {
 default: return state
 case 'ADD_USER' :
 return [action.post,state.users]
 case 'UPDATE_CURRECT_USER' :
    state.currentUser=action.user
    console.log(state)
 return state
 case 'UPDATE_PASSWORD' :{
    let ps=action.password
    var st=state.users;
    let cu=state.currentUser;
    console.log(state)
       for(var i=0;i<st.length;i++){
       if(st[i].userName===cu){
           st[i].Password=ps;
        state.users=st
       }
    }
return [state]
 }
 }
 
}
 export default postReducer;