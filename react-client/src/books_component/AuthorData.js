import React from 'react'
import {graphql , useFragment } from "react-relay"

const AuthorDataFragmentQuery = graphql`
  fragment AuthorData_author on Author {
     Name
     Age
     id
  }
`

function SamplePage(props) {

    const data = useFragment(AuthorDataFragmentQuery , props.author)

    return (
        <div>
            Name: {data.Name}
            <br>
            </br>
            Age : {data.Age}
        </div>
    )
}
export default SamplePage

