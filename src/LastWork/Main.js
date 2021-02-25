import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  User from './User';
class Main extends Component{
    constructor(){
        super()
        this.state={
            userName:"",
            password:"",
            screen:"login"
        }
        this.handleChange=this.handleChange.bind(this);
        this.navigate=this.navigate.bind(this);
    }
    handleChange(event){
        this.setState({
            userName:event.target.value
        });

    }
    navigate(event){
        this.setState({
            screen:"user",
            userName:event.target.value
        });
    }
    render(){
         // <input type="text" placeholder="UserName" name="username"  onChange={this.handleChange}></input>
        return <div>
            {
                this.state.screen==="login"&&(<div>
            <input type="text" placeholder="UserName" name="username" onChange={this.handleChange} ></input>
            <input type="text" placeholder="Password" name="password" ></input>
            <input type="submit" onClick={this.navigate}></input>
            </div>
                )
            }
            {   
                this.state.screen==="user"&&(<div>
            <User userName={this.state.userName} onNavigate={this.navigate}/>
            </div>
                )
            }
                </div>

    }
}
export default Main;