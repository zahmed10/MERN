import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Home from './components/Home';
import Num from './components/Num';
import Word from './components/Word';
import Custom from './components/Custom';
import Test from './components/Test';

<Home></Home>

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/">Home</Link>  
      </p>
      <Switch>
    <Route exact path="/:num">
          <Test />
        </Route>
    <Route exact path="/:word">
          <Word />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
        <Route path="/:word/:color/:background">
          <Custom />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
