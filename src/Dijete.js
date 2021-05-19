
import './App.css';
import slika from './slike/toh.jpg';
import slikaa from './slike/m.jpg';
import megu from './slike/megu.jpg';
import gromp from './slike/gromp.jpg';
import mei from './slike/mei.jpg';

function Dijete({slanje1, slanje2, slanje3, slanje4}) {
  return (
    <div className="dijete">
        1. {slanje1.name} {slanje1.prezime} <br />
            <img src = {slika} className = "list"></img> <br />
        2. {slanje2.name} {slanje2.prezime}  <br />
            <img src = {megu} className = "list"></img> <br />
        3. {slanje3.name} {slanje3.prezime}  <br />
        <img src = {gromp} className = "list"></img> <br /> 
        4. {slanje4.name} {slanje4.prezime} <br />
        <img src = {mei} className = "list"></img> <br />
        

    </div>
  );
}

export default Dijete;