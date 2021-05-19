
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Prva from './Prva.js';
import Druga from './Druga.js';
import Treca from './Treca.js';
import Cetvrta from './Cetvrta.js';
import Peta from './Peta.js';
import Naslovna from './Naslovna.js';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path = '/' component={Naslovna}></Route>
        <Route path = '/prva' component={Prva}></Route>
        <Route path = '/druga' component = {Druga}></Route>
        <Route path = '/treca' component = {Treca}></Route>
        <Route path = '/cetvrta' component = {Cetvrta}></Route>
        <Route path = '/peta' component = {Peta}></Route>
      </Router>
      
    </div>
  );
}

export default App;
