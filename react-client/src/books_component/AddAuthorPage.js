import React from 'react'
const { useMutation} = require('react-relay');
const graphql = require("babel-plugin-relay/macro");

function AddAuthorPage(props) {
    const [commit, isInFlight] = useMutation(graphql`
    mutation AddAuthorPageMutation($name: String! , $age: Int , $id : ID) {
        addAuthor(name : $name , age: $age  , id: $id) {
            Name
            Age
            id
      }
    }
  `);

    const [data , setData] = React.useState(null)
    const onSubmithandler = (event) => {
        console.log(data)
        commit({
            variables : data,
            onCompleted(data){props.AddNewAuthor(data)},
            onError(error){console.log(error)}
        })
        event.preventDefault();
    }

    const onhandleChange = (event) => {
        if(event.target.name == "age") setData({...data , [event.target.name] : Number(event.target.value)})
        else setData({...data , [event.target.name] : event.target.value})
        
    }





    return (
        <div>
            <form onSubmit={onSubmithandler}> 
                <span>Add Author</span>
                <input type="text" name="name" label="Name of the author" placeholder="JK Rowling"  onChange={onhandleChange}/>
                <input type="number" name="age" label="Age of the author" placeholder="Age"   onChange={onhandleChange}/>
                <input type="text" name="id" label="id" placeholder="id"  onChange={onhandleChange}/>
                <button type="submit" >Submit</button>
            </form>
            {isInFlight && "Updating"}
            
        </div>
    )
}


export default AddAuthorPage

