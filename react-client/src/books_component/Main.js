// import { loadQuery , graphql , usePreloadedQuery} from "react-relay"
// import Containerpage from "./ContainerPage";
// const {useRelayEnvironment} = require('react-relay');

// const BooksQuery = graphql`
// query MainQuery {
// 	books(first : 8){
// 		Name
//     Genre
//     author{
//       id
//       Namw
//     }
//   }
// }
// `


// const Main = () => {
//     const Environment = useRelayEnvironment();
//     const queryReference = loadQuery(
//         Environment,
//         BooksQuery,
//         {fetchPolicy: 'store-or-network'},
//       );
    
//     return <Containerpage initialQueryRef={queryReference} />
// }

// export default Main