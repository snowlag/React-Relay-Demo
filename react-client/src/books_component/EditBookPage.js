import React from 'react'
const { useMutation} = require('react-relay');
const graphql = require("babel-plugin-relay/macro");

function EditBookpage(props) {
    const [commit, isInFlight] = useMutation(graphql`
    mutation EditBookPageMutation($name: String! , $genre: String , $id : ID) {
        editBook(name : $name , genre: $genre  , id: $id) {
            Name
            Genre
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
            onCompleted(data){console.log("Edited  book" , data)},
            onError(error){console.log(error)}
        })
    }
    const onhandleChange = (event) => {
        setData({...data , [event.target.name] : event.target.value}) 
    }





    return (
        <div>
            <form onSubmit={onSubmithandler}> 
                <hr/>
                <span>Edit Book</span>
                <input type="text" name="name" label="Name of Book" placeholder="Book name"  onChange={onhandleChange}/>
                <input type="text" name="genre" label="Genre" placeholder="Genre"   onChange={onhandleChange}/>
                <input type="text" name="id" label="id" placeholder="existing book id"  onChange={onhandleChange}/>
                <button type="submit" >Update</button>
                <hr/>
            </form>
            {isInFlight && "Updating"}
            
        </div>
    )
}


export default EditBookpage

