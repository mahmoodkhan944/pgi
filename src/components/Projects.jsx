import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/dnrcasablanca.png";
import img2 from "../assets/godrejroyalwoods.png";
import img3 from "../assets/godrejaqua.png";
import img4 from "../assets/suyognavkaar.png";
import img5 from "../assets/godrejrejuve.png";
import img6 from "../assets/vtppegasus.png";
import img7 from "../assets/gangotritherise.png";
import img8 from "../assets/psjivahomes.png";
import img9 from "../assets/nirmalaenclaves.png";

const Projects = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <h1 className="legend">BANGALORE</h1>
          <h2>DNR Casablanca</h2>
        </div>

        <div>
          <img src={img2} alt="Item2" />
          <h1 className="legend">BANGALORE</h1>
          <h2>Godrej Royal Woods</h2>
        </div>

        <div>
          <img src={img3} alt="Item3" />
          <h1 className="legend">BANGALORE</h1>
          <h2>Godrej Aqua</h2>
        </div>

        <div>
          <img src={img4} alt="Item4" />
          <h1 className="legend">PUNE</h1>
          <h2>Syoug Navkaar</h2>
        </div>

        <div>
          <img src={img5} alt="Item5" />
          <h1 className="legend">PUNE</h1>
          <h2>Godrej Rejuve</h2>
        </div>

        <div>
          <img src={img6} alt="Item6" />
          <h1 className="legend">PUNE</h1>
          <h2>VTP Pegasus</h2>
        </div>

        <div>
          <img src={img7} alt="Item7" />
          <h1 className="legend">KOLKATA</h1>
          <h2>Gangotri The Rise</h2>
        </div>

        <div>
          <img src={img8} alt="Item8" />
          <h1 className="legend">KOLKATA</h1>
          <h2>PS Jiva Homes</h2>
        </div>

        <div>
          <img src={img9} alt="Item9" />
          <h1 className="legend">KOLKATA</h1>
          <h2>Nirmala Enclaves</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
