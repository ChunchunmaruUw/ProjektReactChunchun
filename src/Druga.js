
import './App.css';
import Header from './Header';
import './druga.css';
import Footer from './Footer';



function Druga() {
  return (

   
    <div className="App">
       <Header></Header>
      <Footer></Footer>
       <div className = "divv">
         <h1>
           Which anime girl are you?
         </h1>
          <h2>
            By filling up each question with ONE answer, in the end we will determine which anime girl fits your character the most!
          </h2>
          <div className = "box">
            <p>
              If you had to punch someone, who would you punch?
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="q" id = "1" />Baby
              <input type="radio" value="2" name="q" id = "2" className = "druga"/>Old lady
              <br></br>
              <input type="radio" value="3" name="q" id = "3" className = "treca"/>Pregnant woman
              <input type="radio" value="4" name="q" id = "4" className = "cet"/>Puppy
            </div>
            <p>
              Picture a scenario: A big dinosaur is in front of you, what do you do?
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="z" id = "5" />Sacrifice people to escape
              <input type="radio" value="2" name="z" id = "6" className = "druga"/>Sacrifice yourself so people escape
              <br></br>
              <input type="radio" value="3" name="z" id = "7" className = "treca"/>Try to unite with people and kill the beast
              <input type="radio" value="4" name="z" id = "8" className = "cet"/>Unite with the beast and destroy 
            </div>
            <p>
                Define life:
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="y" id = "9" />A good place with loads of things to do
              <input type="radio" value="2" name="y" id = "10" className = "druga"/>Depressed and gloomy
              <br></br>
              <input type="radio" value="3" name="y" id = "11" className = "treca"/>It's okay
              <input type="radio" value="4" name="y" id = "12" className = "cet"/>no
            </div>
            <p>
              Whos more superior?
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="r" id = "13" />Men
              <input type="radio" value="2" name="r" id = "14" className = "druga"/>Women
              <br></br>
              <input type="radio" value="3" name="r" id = "15" className = "treca"/>Animals
              <input type="radio" value="4" name="r" id = "16" className = "cet"/>Mr. Krabs
            </div>
            <p>
              Where does Mr. Krabs live?
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="o" id = "17" />Pineaplle
              <input type="radio" value="2" name="o" id = "18" className = "druga"/>Anchor
              <br></br>
              <input type="radio" value="3" name="o" id = "19" className = "treca"/>Bikini Bottom
              <input type="radio" value="4" name="o" id = "20" className = "cet"/>He doesn't
            </div>
            <p>
              Best material:
            </p>
            <div className = "checklist">
              <input type="radio" value="1" name="p" id = "21" />Wood
              <input type="radio" value="2" name="p" id = "22" className = "druga"/>Stone
              <br></br>
              <input type="radio" value="3" name="p" id = "23" className = "treca"/>Silver
              <input type="radio" value="4" name="p" id = "24" className = "cet"/>Tallgrass
            </div>
            <button className="button button1" onClick = {myFunction}><b>Calculate</b></button>

            <div id = "test">

            </div>
            <div id = "texts">

            </div>
          </div>
       </div>
    </div>
            
  );
}
  const myFunction = () => {
    let counterr = 0;
    let x = document.getElementById("1").checked;
    console.log(counterr);
    if (x == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let xx = document.getElementById("2").checked;
    
    if (xx == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let xxx = document.getElementById("3").checked;
   
    if (xxx == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let xxxx = document.getElementById("4").checked;
   
    if (xxxx == 1) {
      counterr += 4;
      console.log(counterr);
    }

    
    let y = document.getElementById("5").checked;
    console.log(counterr);
    if (y == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let yy = document.getElementById("6").checked;
    
    if (yy == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let yyy = document.getElementById("7").checked;
   
    if (yyy == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let yyyy = document.getElementById("8").checked;
   
    if (yyyy == 1) {
      counterr += 4;
      console.log(counterr);
    }


    let f = document.getElementById("9").checked;
    console.log(counterr);
    if (f == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let ff = document.getElementById("10").checked;
    
    if (ff == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let fff = document.getElementById("11").checked;
   
    if (fff == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let ffff = document.getElementById("12").checked;
   
    if (ffff == 1) {
      counterr += 4;
      console.log(counterr);
    }




    
    let u = document.getElementById("13").checked;
    console.log(counterr);
    if (u == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let uu = document.getElementById("14").checked;
    
    if (uu == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let uuu = document.getElementById("15").checked;
   
    if (uuu == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let uuuu = document.getElementById("16").checked;
   
    if (uuuu == 1) {
      counterr += 4;
      console.log(counterr);
    }


    
    let t = document.getElementById("17").checked;
    console.log(counterr);
    if (t == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let tt = document.getElementById("18").checked;
    
    if (tt == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let ttt = document.getElementById("19").checked;
   
    if (ttt == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let tttt = document.getElementById("20").checked;
   
    if (tttt == 1) {
      counterr += 4;
      console.log(counterr);
    }



    
    let o = document.getElementById("21").checked;
    console.log(counterr);
    if (o == 1) {
      counterr += 1;
      console.log(counterr);
    }
    let oo = document.getElementById("22").checked;
    
    if (oo == 1) {
      counterr += 2;
      console.log(counterr);
    }
    let ooo = document.getElementById("23").checked;
   
    if (ooo == 1) {
      counterr += 3;
      console.log(counterr);
    }
    let oooo = document.getElementById("24").checked;
   
    if (oooo == 1) {
      counterr += 4;
      console.log(counterr);
    }


    if (counterr <= 6) {

      let node = document.createTextNode("You're pretty normal.");
      document.getElementById("texts").append(node);
      console.log(node);
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga5.jpg");
      paint.setAttribute("width", "300px")
      paint.setAttribute("height", "400px")
      document.getElementById("test").append(paint);
      
    }
   
    else if (counterr <= 10) {
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga2.jpg");
      document.getElementById("test").append(paint);
      let node = document.createTextNode("You are a kind person with loads of care for others.");
      document.getElementById("texts").append(node);
    }
    else if (counterr <= 13) {
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga3.jpg");
      document.getElementById("test").append(paint);
      let node = document.createTextNode("You cry and whine alot, don't bother with heavy tasks, egoistic aswell");
      document.getElementById("texts").append(node);
    }
    else if (counterr <= 16) {
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga4.jpg");
      document.getElementById("test").append(paint);
      let node = document.createTextNode("You eat alot.");
      document.getElementById("texts").append(node);
    }
    else if (counterr <= 20) {
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga1.jpg");
      document.getElementById("test").append(paint);
      let node = document.createTextNode("You are a pretty annoying person, people still like you but you tend to annoy them.");
      document.getElementById("texts").append(node);
    }
    else {
      let paint = document.createElement("img");
      paint.setAttribute("src", "Images/druga6.jpg");
      document.getElementById("test").append(paint);
      let node = document.createTextNode("Very confused and curious about everything, asks too many questions");
      document.getElementById("texts").append(node);
    }
    
  }


export default Druga;
