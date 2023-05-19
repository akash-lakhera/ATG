import Post from "./components/Post";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import Login from "./components/Login";
import Suggest from "./components/Suggest";
import p1B from "./post-1.png";
import article from "./✍️ Article.svg";
import sarthak from "./sarthak.png";
import edu from "./🔬️ Education.svg";
import sarah from "./sarah.png";
import meetup from "./🗓️ Meetup.svg";
import ronal from "./ronal.png";
import job from "./💼️ Job.svg";
import joe from "./Joe.png";
import p2B from "./post-2.png";
import p3B from "./post-3.png";
import sar from "./sar.jpg"
import {React,useState} from "react"
function App() {
  const [showLog, setShowLog]=useState(false);

  const handler=()=>{
    setShowLog(!showLog)
  }
  return (
    <div className="App">
      <Nav setShowLog={handler}/>
      <Banner />
      <div className="main">
        <Filter />
        

       <div className="loca d-flex" style={{gap:"100px"}}>
        <div>

      
        <Post
          ban={p1B}
          image={sar}
          name="Sarthak Kamra"
          type={article}
          header="What if famous brands had regular fonts? Meet RegulaBrands!"
          text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei"
        />
          <Post
          ban={p2B}
          image={sarah}
          name="Ronal Jones"
          type={edu}
          header="Tax Benefits for Investment under National Pension Scheme launched by Government"
          text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei"
        />
           <Post
          ban={p3B}
          image={ronal}
          name="Sarah West"
          type={meetup}
          header="Finance & Investment Elite Social Mixer @Lujiazui"
          text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei"
        />
          </div>
        <Suggest/>
         </div>
  
         </div>
        {showLog?<Login setShowLog={handler}/>:""}
     
    </div>
  );
}

export default App;
