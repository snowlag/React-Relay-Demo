import React from 'react'
const {useQueryLoader , usePreloadedQuery , useFragment} = require('react-relay');
const graphql = require("babel-plugin-relay/macro");



const BookPageQuery = graphql`
query BookPageQuery($id: ID){
  author(id: $id){
    Name
    id
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
        {data.author.Name}
      </div>
    )
}




export default BookPage

