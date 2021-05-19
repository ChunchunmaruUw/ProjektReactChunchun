import { Component } from 'react';
import './App.css';
import Dijete from './Dijete';
import Header from './Header';
import Footer from './Footer';
import bread from './slike/bread.jpg';
import explo from './slike/exp.jpg';
import grompo from './slike/smite.jpg';
import bunny from './slike/bunny.jpg';

export class Prva extends Component { 

  state  ={
    ime:'',
    prezime:'',
    lozinka:'',
  }

    

    render()
{

  const an1 = {
    name: "Mrs.",
    prezime: "Tohka"
  }
  const an2 = {
    name: "Chunchunmaru",
    prezime: "Megumin"
  }
  const an3 = {
    name: "Lord",
    prezime: "Grompulus"
  }
  const an4 = {
    name: "Bunny",
    prezime: "Mei"
  }
  

  return (
    <div className="App">
       <Header></Header>
       <Footer></Footer>
       <div className = "div2">
          <h1 className = "sidetext">She likes</h1>
          <a href = "https://date-a-live.fandom.com/wiki/Tohka_Yatogami"> <img src = {bread} className = "side" /></a>
          <h1 className = "sidetext">She likes</h1>
          <a href = "https://konosuba.fandom.com/wiki/Megumin"><img src = {explo} className = "side"></img></a>
          <h1 className = "sidetext2">He likes</h1>
          <a href = "https://leagueoflegends.fandom.com/wiki/Gromp"><img src = {grompo} className = "side1"></img></a>
          <h1 className = "sidetext2">She likes</h1>
          <a href = "https://aobuta.fandom.com/wiki/Mai_Sakurajima"><img src = {bunny} className = "side1"></img></a>
        </div>
       <div className = "div1">
            <p id = "title"><b>Waifu tier list</b></p>
            
            <p><Dijete slanje1 = {an1} slanje2 = {an2} slanje3 = {an3} slanje4 = {an4}></Dijete></p>

       </div>
       <div className = "divov">
       <h1>Send to:{this.state.ime}</h1>
          <form>
            <input className = "input" placeholder = 'Send to:' value = {this.state.ime} onChange = {e =>this.setState({ime: e.target.value})}/> <br />
            <textarea className = "input1" placeholder = 'Write your message here! :D' value = {this.state.prezime} onChange = {e =>this.setState({prezime: e.target.value})}/><br />
            
            <button onClick = {()=>this.onSubmit()}>Potvrdi</button>
          </form>
       </div>
    </div>
  );
}
}

export default Prva;