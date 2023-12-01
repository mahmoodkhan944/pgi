import React from "react";
import vg from "../assets/dnrcasablanca.png";
import vg1 from "../assets/godrejroyalwoods.png";
import vg2 from "../assets/godrejaqua.png";
import vg3 from "../assets/suyognavkaar.png";
import vg4 from "../assets/godrejrejuve.png";
import vg6 from "../assets/gangotritherise.png";
import vg7 from "../assets/psjivahomes.png";
import vg8 from "../assets/nirmalaenclaves.png";
import vg9 from "../assets/lo1tese2.jpg";
import vg10 from "../assets/paramount.jpg";
import { BiBulb } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { GoRocket } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>PG<em>i</em></h1>
          <p>PREMIUM GYPSUM AND INTERIORS</p>
        </main>
      </div>

      <div className="home2">
      </div>

      <div className="home3" id="aboutus">
        <div>
          <h1>ABOUT US</h1>
          <p>
            Premium Gypsum and Interiors started its journey in 2019 as a
            subsidiary of S.K. Construction, a real estate company in Uttar
            Pradesh established in 2008. Our traditional business model is based
            on the accomplishment of properties in the real estate market in the
            Lucknow region. Based on the expansion strategy of the company to
            diversify our properties, we have now established Premium Gypsum and
            Interiors in Bangalore and Pune as a solution to interior designing
            with a focus on Gypsum plastering, Grid Work, Partitions and False
            Ceiling domain. We have a hard-working and experienced workforce,
            committed to the highest quality ﬁnish, value for money and
            on-time/every time service delivery. Premium Gypsum and Interiors
            aspires to establish itself as one of the best interior designing
            company in Bangalore and Pune region.
          </p>
        </div>
      </div>

      <div className="home4" id="companystrategy">
        <div>
          <h1>COMPANY STRATEGY</h1>
        </div>
        <article1>
          <div
            style={{
              animationDelay: "0.3s",
            }}
          >
            <p1>
              <FiTarget /> Purpose
            </p1>
            <h2>
              To be a leader in the real estate industry by providing enhanced
              services, relationship and proﬁtability and become a renowned name
              and one stop solution for related work in the region.
            </h2>
          </div>
        </article1>
        <article2>
          <div
            style={{
              animationDelay: "0.5s",
            }}
          >
            <p>
              <BiBulb /> Vision
            </p>
            <h3>
              To provide quality services that exceeds the expectations of our
              esteemed customers.
            </h3>
          </div>
        </article2>
        <article3>
          <div
            style={{
              animationDelay: "0.7s",
            }}
          >
            <p2>
              <GoRocket /> Mission
            </p2>
            <h4>
              Statement To build long term relationships with our customers,
              clients and provide exceptional customer services by pursuing
              business through dedication and hard work.
            </h4>
          </div>
        </article3>
      </div>

      <div className="home5" id="corevalues">
        <div>
          <h1>CORE VALUES</h1>
          <p1>
            • We believe in achieving cent percentage customer satisfaction.
          </p1>
          <p2>
            • We integrate honesty, integrity and business ethics into all
            aspects of our business functioning.
          </p2>
        </div>
      </div>

      <div className="home6" id="objectives">
        <div>
          <h1>OBJECTIVES</h1>
          <p>
            To acquire work in the field of Gypsum plastering, Grid Work,
            Partitions, False Ceiling and other related work in a firm where we
            can use the experience which we have gained in overseeing various
            projects, maintenance tasks as well as repair of plaster buildings
            and other structures.
          </p>
        </div>
      </div>

      <div className="home7" id="experience">
        <div1>
          <h1>Experience</h1>
        </div1>
        <div2>
          <table>
            <tr>
              <th>ID</th>
              <th>CUSTOMERS</th>
              <th>PROJECT NAME</th>
              <th>LOCATION</th>
              <th>IMAGE</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Elite Construction Pvt Ltd</td>
              <td>Godrej Air</td>
              <td>Hoodi Circle, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg9}
                    alt="Link-sensitive graphic"
                    width="50"
                    usemap="#mood"
                  />
                </p>
                <map name="mood">
                  <area
                    shape="rect"
                    coords="0,0,50,50"
                    href={vg9}
                    target="_blank"
                    alt="Godrej Air"
                    title="Godrej Air"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Yashaswini Buildtech</td>
              <td>Godrej Aqua</td>
              <td>Hosahalli, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg2}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood1"
                  />
                </p>
                <map name="mood1">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg2}
                    target="_blank"
                    alt="Godrej Aqua"
                    title="Godrej Aqua"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shree Venkateswara Infrastructure</td>
              <td>Godrej Aqua</td>
              <td>Hosahalli, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg2}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood2"
                  />
                </p>
                <map name="mood2">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg2}
                    target="_blank"
                    alt="Godrej Aqua"
                    title="Godrej Aqua"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>New Consolidated Construction Company Ltd</td>
              <td>DNR Casablanca</td>
              <td>Mahadevpura, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood3"
                  />
                </p>
                <map name="mood3">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg}
                    target="_blank"
                    alt="DNR Casablanca"
                    title="DNR Casablanca"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Shree Balaji Interprises</td>
              <td>Godrej Royale Woods</td>
              <td>Devalahalli, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg1}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood4"
                  />
                </p>
                <map name="mood4">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg1}
                    target="_blank"
                    alt="Godrej Royal Woods"
                    title="Godrej Royal Woods"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Buildon Plasters Private Limited</td>
              <td>Gangotri The Rise</td>
              <td>Kolkata</td>
              <td>
                <p>
                  <img
                    src={vg6}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood5"
                  />
                </p>
                <map name="mood5">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg6}
                    target="_blank"
                    alt="Gangotri The Rise"
                    title="Gangotri The Rise"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Buildon Plasters Private Limited</td>
              <td>Nirmala Enclave</td>
              <td>Kolkata</td>
              <td>
                <p>
                  <img
                    src={vg8}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood6"
                  />
                </p>
                <map name="mood6">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg8}
                    target="_blank"
                    alt="Nirmala Enclave"
                    title="Nirmala Enclave"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Buildon Plasters Private Limited</td>
              <td>PS Jiva Homes</td>
              <td>Kolkata</td>
              <td>
                <p>
                  <img
                    src={vg7}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood7"
                  />
                </p>
                <map name="mood7">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg7}
                    target="_blank"
                    alt="PS Jiva Homes"
                    title="PS Jiva Homes"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Suyog Development Corporation Limited</td>
              <td>Suyog</td>
              <td>Navkkar, Pune</td>
              <td>
                <p>
                  <img
                    src={vg3}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood8"
                  />
                </p>
                <map name="mood8">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg3}
                    target="_blank"
                    alt="Suyog"
                    title="Suyog"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Aadi Interiors & Arihant Incorporation</td>
              <td>Godrej Rejuve</td>
              <td>Mundhwa, Keshav Nagar, Pune</td>
              <td>
                <p>
                  <img
                    src={vg4}
                    alt="Link-sensitive graphic"
                    width="100"
                    useMap="#mood9"
                  />
                </p>
                <map name="mood9">
                  <area
                    shape="rect"
                    coords="0,0,100,100"
                    href={vg1}
                    target="_blank"
                    alt="Godrej Rejuve"
                    title="Godrej Rejuve"
                  />
                </map>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Image Label Private Limited</td>
              <td>36, Paramount Gardens</td>
              <td>Thalghatpura, Bangalore</td>
              <td>
                <p>
                  <img
                    src={vg10}
                    alt="Link-sensitive graphic"
                    width="50"
                    useMap="#mood10"
                  />
                </p>
                <map name="mood10">
                  <area
                    shape="rect"
                    coords="0,0,50,50"
                    href={vg10}
                    target="_blank"
                    alt="Paramount Gardens"
                    title="Paramount Gardens"
                  />
                </map>
              </td>
            </tr>
          </table>
        </div2>
      </div>
    </>
  );
};

export default Home;
