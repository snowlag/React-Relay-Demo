import React from 'react'
const { useMutation} = require('react-relay');
const graphql = require("babel-plugin-relay/macro");

function EditAuthorPage(props) {
    const [commit, isInFlight] = useMutation(graphql`
    mutation EditAuthorPageMutation($name: String! , $age: Int , $id : ID) {
        editAuthor(name : $name , age: $age  , id: $id) {
            Name
            Age
            id
      }
    }
  `);

    const [data , setData] = React.useState(null)
    const onSubmithandler = (event) => {
        event.preventDefault();
        console.log(data)
        commit({
            variables : data,
            onCompleted(data){console.log("updated data" , data)},
            onError(error){console.log(error)}
        })
    }

    const onhandleChange = (event) => {
        if(event.target.name == "age") setData({...data , [event.target.name] : Number(event.target.value)})
        else setData({...data , [event.target.name] : event.target.value})
        
    }





    return (
        <div>
            <form onSubmit={onSubmithandler}> 
                <span>Edit Author</span>
                <input type="text" name="name" label="Name of the author" placeholder="JK Rowling"  onChange={onhandleChange}/>
                <input type="number" name="age" label="Age of the author" placeholder="Age"   onChange={onhandleChange}/>
                <input type="text" name="id" label="id" placeholder="existing id"  onChange={onhandleChange}/>
                <button type="submit" >Update</button>
            </form>
            {isInFlight && "Updating"}
            
        </div>
    )
}


export default EditAuthorPage

