import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Projects.scss";

import img1 from "../assets/godrejair.jpg";
import img2 from "../assets/godrejaqua.jpg";
import img3 from "../assets/godrejaqua.png";
import img4 from "../assets/dnrcasablanca.png";
import img5 from "../assets/godrejroyalwoods.png";
import img6 from "../assets/gangotritherise.png";
import img7 from "../assets/nirmalaenclaves.png";
import img8 from "../assets/psjivahomes.png";
import img9 from "../assets/suyognavkaar.png";
import img10 from "../assets/godrejrejuve.png";
import img11 from "../assets/garden.jpg";

const Projects = () => {
  return (
    <>
      <header className="header">
        <h1>Photo Gallery</h1>
      </header>
      <body>
        <div className="gallery">
          <figure>
            <img src={img1} alt="Godrej Air" />
            <figcaption className="caption">
              <strong>Godrej Air</strong> <br />
              Elite Construction Pvt Ltd <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img2} alt="Godrej Aqua" />
            <figcaption>
              <strong>Godrej Aqua</strong> <br />
              Yashaswini Buildtech
              <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img3} alt="Godrej Aqua" />
            <figcaption>
              <strong>Godrej Aqua</strong> <br />
              Shree Venkateswara Infrastructure <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img4} alt="dnarcasablanca" />
            <figcaption>
              <strong>DNR Casablanca</strong> <br />
              New Consolidated Construction Company Ltd <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img5} alt="dnarcasablanca" />
            <figcaption>
              <strong>Godrej Royal Woods</strong> <br />
              Shree Balaji Interprises <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img6} alt="Gangotri The Rise" />
            <figcaption>
              <strong>Gangotari The Rise</strong> <br />
              Buildon Plasters Private Limited <br />
              <em>Kolkata</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img7} alt="Nirmala Enclaves" />
            <figcaption>
              <strong>Nirmala Enclaves</strong> <br />
              Buildon Plasters Private Limited <br />
              <em>Kolkata</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img8} alt="PS Jiva Homes" />
            <figcaption>
              <strong>PS Jiva Homes</strong> <br />
              Buildon Plasters Private Limited <br />
              <em>Kolkata</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img9} alt="Suyog Navkkar" />
            <figcaption>
              <strong>Suyog Navkkar</strong> <br />
              Suyog Development Corporation Limited <br />
              <em>Pune</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img10} alt="Godrej Rejuve" />
            <figcaption>
              <strong>Godrej Rejuve</strong> <br />
              Aadi Interiors & Arihant Incorporation <br />
              <em>Pune</em>
            </figcaption>
          </figure>
          <figure>
            <img src={img11} alt="36, Paramount Gardens" />
            <figcaption>
              <strong>36, Paramount Gardens</strong> <br />
              Image Label Private Limited <br />
              <em>Bangalore</em>
            </figcaption>
          </figure>
        </div>
      </body>
    </>
  );
};

export default Projects;
