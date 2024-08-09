import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} alt="" className="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" className="" />
              More info
            </button>
          </div>
          <TitleCards title={"Popular on Netflix"} category={"now_playing"}/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for you"} category={"top_rated"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
