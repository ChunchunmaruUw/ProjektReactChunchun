

import './App.css';
import Header from './Header';
import Footer from './Footer';

function Naslovna() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <div className = "div2">
          <h1></h1>
        </div>
        <div className = "div1"> 
          <h1>
            Hello!
          </h1>
          <h2>
            This page will contain all the information you will ever need.
          </h2>
          <h2>
            Having issues with love? Come here!
          </h2>
          <h2>
            You hate your job? We got you covered!
          </h2>
          <h2>
            You hate the neighbour who calls the cops on you for shouting at random people in your League games? A perfect place for you to relax!
          </h2>
          <br />
          <div>
            <p >I hope you can enjoy the site as much as I had fun creating it, it was a big hassle and trouble to make but i tried my best, hope you enjoy it!</p>
          </div>
          <div>
            <p className = "p"><b>Everything!!!!</b> on this site shoud not be taken seriously!!! It's all for comedic purposes!</p>
          </div>
          <br />
        </div>
        <div className = "div3">
          <div className = "container">
            <h1>
              Sign in
            </h1>
            <label for="uname"><h2>Username</h2></label>
            <input type="text" placeholder="Enter Username" name="uname" className = "check"></input>
            <label for="psw"><h2>Password</h2></label>
            <input type="password" placeholder="Enter Password" name="psw" className = "check"></input>

          </div>
        </div>
      </div>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default Naslovna;