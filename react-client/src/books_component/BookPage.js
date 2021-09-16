import React from 'react'
import {useQueryLoader , usePreloadedQuery , graphql} from 'react-relay';
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
      ]  = useQueryLoader(BookPageQuery);
    
    


    return (
       <div> 
           Name : {props.book.Name} , Genre : {props.book.Genre} 
           <button
           onClick={() => {if(props.book.author) loadQuery({id: props.book.author.id})}}
           disabled={queryReference != null}
         >
           Reveal Author
         </button>
           <br></br>
           <React.Suspense fallback="Loading...">
             {queryReference != null
               ? <>
                   <button onClick={disposeQuery}>
                      Hide the author and dispose author query
                    </button>
                   <AuthorInfo queryReference={queryReference} />
                 </>
                : null
             }
            </React.Suspense>    
       </div>
    )



}


const AuthorInfo = ({queryReference}) => {
    const data = usePreloadedQuery(BookPageQuery , queryReference)
    console.log(data)
    return(
      <div>
        <AuthorData author={data.author} />
      </div>
    )
}




export default BookPage

