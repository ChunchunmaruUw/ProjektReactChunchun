
import {Link} from 'react-router-dom';
import './App.css';
import slika from './slike/ma.jpg';


function Header() {
  return (
    <div className="Header">
      <Link to = '/'><button class="button button1">Naslovna</button></Link>
        <Link to = '/prva'><button class="button button1">List</button></Link>
        <Link to = '/druga'><button class="button button1">Character test</button></Link>
        <Link to = '/treca'><button class="button button1">Music</button></Link>
        <Link to = '/cetvrta'><button class="button button1">2D girls</button></Link>
        
        <h1>Welcome</h1>
        <img src = {slika} className = "main" ></img>
    </div>
  );
}

export default Header;