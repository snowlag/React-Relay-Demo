import React , {useEffect }from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
const { useMutation , usePreloadedQuery , useLazyLoadQuery} = require('react-relay');


const graphql = require("babel-plugin-relay/macro");

function AddBookPage(props) {
    const [commit, isInFlight] = useMutation(graphql`
    mutation AddBookPageMutation($name: String! , $genre: String , $id : ID , $authorid: ID ) {
        addBook(name : $name , genre: $genre  , id: $id , authorid : $authorid) {
            Name
            Genre
            id
            author{
                id
            }
            
      }
    }
  `);


   const FetchAuthorsQuery = graphql`
    query AddBookPageQuery{
        authors(first: 10){
            Name
            id
        }
    }
   `
    const authorsdata = useLazyLoadQuery(FetchAuthorsQuery , {fetchPolicy: 'store-or-network'})
    const [data , setData] = React.useState({})
    const [authors , setAuthors] = React.useState([])
    const [flag , setFlag] = React.useState(false)
    useEffect(() => {
      setAuthors(authorsdata.authors)
      setFlag(true)
    }, [authorsdata])

    useEffect(() => {
        console.log(props.newAuthor)
        if(props.newAuthor && flag){
            console.log("new author" , props.newAuthor)
            console.log(authors)
            let prevdata = [...authors];
            prevdata.push(props.newAuthor)
            setAuthors(prevdata)
        }
    }, [props.newAuthor , flag])


    const onSubmithandler = (event) => {
        console.log("Submitted data" , data)
        commit({
            variables : data,
            onCompleted(data){props.AddBook(data)},
            onError(error){console.log(error)}
        })
        event.preventDefault();
    }

    const onhandleChange = (event) => {
        if(event.target.name === "age") setData({...data , [event.target.name] : Number(event.target.value)})
        else setData({...data , [event.target.name] : event.target.value})
    }


    return (
        <div>
            <form onSubmit={onSubmithandler}>
                <hr/> 
                <Typography variant="h4" gutterBottom component="div">
                    Add Book
                </Typography>
                <TextField type="text" name="name" label="Name of the book" placeholder="Book Name"   onChange={onhandleChange}/>
                <TextField type="text" name="genre" label="Age of the author" placeholder="Genre"   onChange={onhandleChange}/>
                <TextField type="text" name="id" label="id" placeholder="id"  onChange={onhandleChange}/>
                {/* <input type="text" name="authorid" label="author id" placeholder="authorid"   onChange={onhandleChange}/> */}
               
                <Select  id="authors" name="authorid" onChange={onhandleChange}>
                    {authors && authors.map((author) => {
                        return  <MenuItem key={author.id} value={author.id}>{author.Name}</MenuItem>

                    })}

                </Select>
                <br />
                <Button  variant="contained" type="submit" >Add</Button>
                <hr/> 
            </form>
            {isInFlight && "Adding"}
            
        </div>
    )
}


export default AddBookPage

