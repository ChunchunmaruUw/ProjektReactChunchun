
import YoutubeEmbed from './YoutubeEmbed';  
import './App.css';
import Header from './Header';
import Footer from './Footer';

export default function Treca() {
  return (
    <div className="App">
        <Header></Header>
        <Footer></Footer>
        <div className = "divv"> 
          <h1>Joshiraku - Nippon Egao Hyakkei</h1>
          <YoutubeEmbed embedId="87K5Uh3AML0" />
          <br></br>
          <h1>Nyanpasu - AYabure Kabure </h1>
          <YoutubeEmbed embedId="S2AaHfze-H0" />
          <br></br>
          <h1>Renai Circulation - Kana Hanazawa</h1>
          <YoutubeEmbed embedId = "jDR0JMyoQGA" />
        </div>
      </div>
  );
}

