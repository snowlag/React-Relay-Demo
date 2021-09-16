import React , {useEffect }from 'react'
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

//    const authorsdata = usePreloadedQuery(FetchAuthorsQuery ,  props.initialQueryRef)

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
                <span>Add Book</span>
                <input type="text" name="name" label="Name of the book" placeholder="Book Name"   onChange={onhandleChange}/>
                <input type="text" name="genre" label="Age of the author" placeholder="Genre"   onChange={onhandleChange}/>
                <input type="text" name="id" label="id" placeholder="id"  onChange={onhandleChange}/>
                {/* <input type="text" name="authorid" label="author id" placeholder="authorid"   onChange={onhandleChange}/> */}
                <select  id="authors" name="authorid" onChange={onhandleChange}>
                    {authors && authors.map((author) => {
                        return  <option key={author.id} value={author.id}>{author.Name}</option>

                    })}

                </select>
                <button type="submit" >Submit</button>
                <hr/> 
            </form>
            {isInFlight && "Adding"}
            
        </div>
    )
}


export default AddBookPage

