import React from "react";
import "../styles/companystrategy.scss";

import { BiBulb } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { GoRocket } from "react-icons/go";

const CompanyStrategy = () => {
  return (
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
  );
};

export default CompanyStrategy;
