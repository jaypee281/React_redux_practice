import React from 'react'

function AddUser(props) {

   const handleSubmit=(event)=> {
        event.preventDefault();
        const userName = event.target.elements.userName.value
        const firstName = event.target.elements.firstName.value
        const lastName = event.target.elements.lastName.value
        const Password = event.target.elements.Password.value
        const post = {
               userName:userName,
               lastName:firstName,
               firstName:lastName,
               Password:Password
           
        }
        if (userName.length>5 && firstName && Password.length>5 ){
           props.addUser(post)
           props.history.push('/')
        }
        else 
        {
            alert("Enter valid User Name. Username and Password should be >5")
        }

    }

        return (
    <div>
        <h1> Enter User Details </h1>
        <div className="form">
          <form onSubmit={handleSubmit}> 
               <input type ="text" placeholder="userName" name="userName"/>
               <input type ="text" placeholder="firstName" name="firstName"/>
               <input type ="text" placeholder="lastName" name="lastName"/>
               <input type ="text" placeholder="Password" name="Password"/>
               <button> Add User </button>
          </form>
        </div>
    </div>
    )
    }

    export default AddUser;