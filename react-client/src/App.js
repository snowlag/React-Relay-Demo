// import CharacterListPage from "./components/CharacterListPage"
import ContainerPage from "./books_component/ContainerPage"
import './App.css';
import Containerpage from "./books_component/ContainerPage.js";
import BooksLayout from "./books_component/Main.js" 


function App(props) {


  return (
    <div className="App">
     {/* < CharacterListPage /> */}
      {/* <Containerpage /> */}
      <BooksLayout />
    </div>
  );
}

export default App;
