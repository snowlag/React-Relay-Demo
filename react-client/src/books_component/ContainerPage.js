
import React, { useEffect } from "react"
import BookPage from "./BookPage"
import AddAuthorPage from "./AddAuthorPage"
import EditBookPage from "./EditBookPage"
import AddBookPage from "./AddBookPage"
import EditAuthorPage from "./EditAuthorPage"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { loadQuery, graphql, usePreloadedQuery, useRelayEnvironment } from "react-relay"
import Paper from '@mui/material/Paper';

//define query
const BooksQuery = graphql`
query ContainerPageQuery {
	books(first : 8){
		Name
    Genre
    author{
      id
    }
  }
}
`




const Containerpage = (props) => {
  const Environment = useRelayEnvironment();
  const queryReference = loadQuery(
    Environment,
    BooksQuery,
    { fetchPolicy: 'store-or-network' },
  );



  const data = usePreloadedQuery(BooksQuery, queryReference)


  const [books, setBooks] = React.useState([])
  const [newauthor, setNewAuthor] = React.useState(null)

  useEffect(() => {
    if (data && data.books && data.books.length > 0) {
      setBooks(data.books)
    }
  }, [data])


  const AddBook = (book) => {
    console.log("Book added", book);
    const newBook = book.addBook;
    let prevdata = [...books]
    prevdata.push(newBook)
    setBooks(prevdata)
  }

  const AddNewAuthor = (author) => {
    console.log("Author added", author)
    setNewAuthor(author.addAuthor)
  }


  console.log(data)
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} md={12} lg={6}>
          <Paper className="bookContainer">
          <Typography variant="h3" gutterBottom component="div">
              Books
           </Typography>
          {books && books.map((book, index) => {
            return <BookPage initialQueryRef={props.initialQueryRef} key={index} book={book} data={data} />
          })}
          </Paper>
        </Grid>
        <Grid xs={12} md={12} lg={6}>
          <EditBookPage />
          <AddAuthorPage AddNewAuthor={AddNewAuthor} />
          <AddBookPage AddBook={AddBook} newAuthor={newauthor} initialQueryRef={props.initialQueryRef} />
          <EditAuthorPage />
        </Grid>

      </Grid>



    </div>
  )
}

export default Containerpage