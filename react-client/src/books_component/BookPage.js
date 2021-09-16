import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useQueryLoader, usePreloadedQuery, graphql } from 'react-relay';
import AuthorData from "./AuthorData"



const BookPageQuery = graphql`
query BookPageQuery($id: ID){
  author(id: $id){
    ...AuthorData_author
  }
}
`
function BookPage(props) {

  const [
    queryReference,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader(BookPageQuery);

  return (
    <div>
      <Stack spacing={2} direction="row">
       <Typography variant="h5" gutterBottom component="div">
           Name : {props.book.Name} , Genre : {props.book.Genre}
        </Typography>
      
        <Button
          onClick={() => { if (props.book.author) loadQuery({ id: props.book.author.id }) }}
          disabled={queryReference != null}
          variant="outlined"
        >
          Reveal Author
        </Button>
        <React.Suspense fallback="Loading...">
          {queryReference != null
            ? <>
              <AuthorInfo queryReference={queryReference} />
              <Button  onClick={disposeQuery}>
                Hide
              </Button>
            </>
            : null
          }
        </React.Suspense>
        </Stack>
       

    </div>
  )

}

const AuthorInfo = ({ queryReference }) => {
  const data = usePreloadedQuery(BookPageQuery, queryReference)
  console.log(data)
  return (
    <div>
      <AuthorData author={data.author} />
    </div>
  )
}




export default BookPage

