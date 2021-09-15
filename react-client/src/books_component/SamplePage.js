import React from 'react'
import {graphql , useFragment } from "react-relay"

const SamplePageFragmentQuery = graphql`
  fragment SamplePage_book on Book {
      Genre
      author {
        id
        Name
        Age
      }
  }
`

function SamplePage(props) {

    const data = useFragment(SamplePageFragmentQuery , props.book)
    // console.log("Fragment" , data);
    return (
        <div>
            
        </div>
    )
}
export default SamplePage

