import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RelayEnvironmentProvider , loadQuery , graphql} from "react-relay"
import Environment  from './environment';
// import Environment  from './books_environment';


// const CharacterListPageQuery = graphql`
// query CharacterListPageQuery{
//   characters(page: 1)  {
//     info{
//       pages
//     }
//   }
// }
// `



// const initialQueryRef = loadQuery(
//   Environment,
//   CharacterListPageQuery,
// )

ReactDOM.render(

    <RelayEnvironmentProvider environment = {Environment}>
      <React.Suspense fallback="Loading">
      <App />
      </React.Suspense>
    
    </RelayEnvironmentProvider>,
  document.getElementById('root')
);

