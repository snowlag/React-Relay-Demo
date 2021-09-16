import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const { useMutation } = require('react-relay');

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

    const [data, setData] = React.useState(null)
    const onSubmithandler = (event) => {
        event.preventDefault();
        console.log(data)
        commit({
            variables: data,
            onCompleted(data) { console.log("updated data", data) },
            onError(error) { console.log(error) }
        })
    }

    const onhandleChange = (event) => {
        if (event.target.name == "age") setData({ ...data, [event.target.name]: Number(event.target.value) })
        else setData({ ...data, [event.target.name]: event.target.value })

    }





    return (
        <div>
            <form onSubmit={onSubmithandler}>
                <Typography variant="h4" gutterBottom component="div">
                    Edit Author
                </Typography>
                <TextField type="text" name="name" label="Name of the author" placeholder="JK Rowling" onChange={onhandleChange} />
                <TextField type="number" name="age" label="Age of the author" placeholder="Age" onChange={onhandleChange} />
                <TextField type="text" name="id" label="Existing id" placeholder="existing id" onChange={onhandleChange} />
                <br />
                <Button variant="contained" type="submit" >Update</Button>
            </form>
            {isInFlight && "Updating"}

        </div>
    )
}


export default EditAuthorPage

