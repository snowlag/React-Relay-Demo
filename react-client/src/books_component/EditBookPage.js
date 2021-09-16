import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const { useMutation , graphql} = require('react-relay');

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
                <Typography variant="h4" gutterBottom component="div">
                  Edit Book
                 </Typography>
                <TextField type="text" name="name" label="Name of Book" placeholder="Book name"  onChange={onhandleChange}/>
                <TextField type="text" name="genre" label="Genre" placeholder="Genre"   onChange={onhandleChange}/>
                <TextField type="text" name="id" label="Existing id" placeholder="existing book id"  onChange={onhandleChange}/>
                <br/>
                <Button  variant="contained" type="submit" >Update</Button>
                <hr/>
            </form>
            {isInFlight && "Updating"}           
        </div>
    )
}
export default EditBookpage

