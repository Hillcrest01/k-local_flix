import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_image" />

        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_image" />
          <p>
            Discovering his potential ata young age, Tom Mboya had a great
            vision for the country and until his untimely death, he did a lot to
            ensure it is heading that direction
          </p>

          <div className="hero_btns">
            <div className="btn">
              <button>
                <img src= {play_icon} alt="" />
                Play
                </button>
            </div>
            <TitleCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
