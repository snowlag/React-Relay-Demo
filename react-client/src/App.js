import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import BooksLayout from "./books_component/ContainerPage" 
import SamplePage from './sample_component/main';



function App(props) {


  return (
    <Router>
       <nav>
          <ul>
            <li>
              <Link to="/">
                  Sample Page
              </Link>
            </li>
            <li>
              <Link to="/relay">
                 Relay page
              </Link>
            </li>
          </ul>
        </nav>
      <div className="App">
        <Switch>
          <Route path="/relay">
            <BooksLayout />
          </Route>
          <Route path="/">
            < SamplePage/>
          </Route>
        </Switch>

      </div>
     
        

    </Router>
    
  );
}

export default App;
