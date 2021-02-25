import React from 'react'

function AddUser(props)  {


    const handleSubmit=(event)=> {
        event.preventDefault();
        const Password = event.target.elements.Password.value
        if (Password.length>5 ){
            props.updatePassword(Password)
            props.history.push('/User')
            alert("Password Changed")
        }
        else 
        {
            alert("Enter valid Password")
        }

    }


        return (
    <div>
        <h1> Enter New Password </h1>
        <div className="form">
          <form onSubmit={handleSubmit}> 
               <input type ="text" placeholder="Password" name="Password"/>
               <button> Change Password </button>
          </form>
        </div>
    </div>
    )
    }




export default AddUser;