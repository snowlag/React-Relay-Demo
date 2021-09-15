import {RelayEnvironmentProvider , loadQuery , graphql} from "react-relay"
import Containerpage from "./ContainerPage";
const {useRelayEnvironment} = require('react-relay');

const MainQuery = graphql`
query MainQuery {
	books(first : 8){
		Name
    Genre
    author{
      id
    }
  }
}`




const Index = () => {
    const Environment = useRelayEnvironment();
    const initialQueryRef = loadQuery(
      Environment,
      MainQuery,
      {fetchPolicy: 'store-or-network'},
    )

    return <Containerpage initialQueryRef={initialQueryRef}/>
}

export default Index