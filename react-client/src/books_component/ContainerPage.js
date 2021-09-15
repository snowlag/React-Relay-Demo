import { useLazyLoadQuery  ,useFragment, graphql, usePreloadedQuery} from "react-relay"
import React , {useEffect} from "react"
import BookPage from "./BookPage"
import AddAuthorPage from "./AddAuthorPage"
import EditBookPage from "./EditBookPage"
import AddBookPage from "./AddBookPage"
import EditAuthorPage from "./EditAuthorPage"
import SamplePage from "./SamplePage"

const BooksQuery = graphql`
query ContainerPageQuery {
	books(first : 8){
		Name
    Genre
    author{
      id
    }
    ...SamplePage_book


  }

}
`




const Containerpage = (props) => {
    console.log(props)
    const data = usePreloadedQuery(BooksQuery , props.initialQueryRef)
    const [books , setBooks] = React.useState([])
    const [newauthor , setNewAuthor] = React.useState(null)

    console.log("new data"  , data)


    useEffect(() => {
       if(data && data.books && data.books.length> 0){
        setBooks(data.books)
       }
    } , [data])


    const AddBook = (book) => {
      console.log("Book added" , book);
      const newBook = book.addBook;
      let prevdata = [...books]
      prevdata.push(newBook)
      setBooks(prevdata)
    }

    const AddNewAuthor = (author) => {
      console.log("Author added" , author)
      setNewAuthor(author.addAuthor)
    }
    // const data = useLazyLoadQuery(
    //   BooksQuery,
    //   {fetchPolicy: 'store-and-network'})

   
    console.log(data)
    return(
        <div>
        {books && books.map((book , index) => {
            return <BookPage initialQueryRef = {props.initialQueryRef}  key={index} book={book} data={data} />
          })}
          <EditBookPage />
          <AddAuthorPage AddNewAuthor={AddNewAuthor}/>
          <AddBookPage AddBook={AddBook} newAuthor={newauthor} initialQueryRef = {props.initialQueryRef} />
          <EditAuthorPage />
          {data && data.books && data.books.map((book , index) => {
            return <SamplePage key={index} book={book} />
          })}
       
 
        </div>
    )
}

export default Containerpage