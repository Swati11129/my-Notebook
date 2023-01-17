// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import NoteState from './component/context/notes/noteContext';

function App() {
  return (
    
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div className='container'>

     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
    </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
