import React from "react";
import "../styles/companystrategy.scss";

import { BiBulb } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { GoRocket } from "react-icons/go";

const CompanyStrategy = () => {
  return (
    <section className="home4" id="companystrategy" aria-labelledby="strategy-heading">
      <header className="strategy-header">
        <h1 id="strategy-heading">COMPANY STRATEGY</h1>
      </header>

      <article className="strategy-item purpose" aria-labelledby="purpose-title">
        <div className="strategy-content" style={{ animationDelay: "0.3s" }}>
          <div className="strategy-icon" aria-hidden="true">
            <FiTarget />
            <span className="icon-label">Purpose</span>
          </div>
          <h2 id="purpose-title" className="strategy-title">
            To be a leader in the real estate industry by providing enhanced
            services, relationship and profitability and become a renowned name
            and one stop solution for related work in the region.
          </h2>
        </div>
      </article>

      <article className="strategy-item vision" aria-labelledby="vision-title">
        <div className="strategy-content" style={{ animationDelay: "0.5s" }}>
          <div className="strategy-icon" aria-hidden="true">
            <BiBulb />
            <span className="icon-label">Vision</span>
          </div>
          <h3 id="vision-title" className="strategy-title">
            To provide quality services that exceeds the expectations of our
            esteemed customers.
          </h3>
        </div>
      </article>

      <article className="strategy-item mission" aria-labelledby="mission-title">
        <div className="strategy-content" style={{ animationDelay: "0.7s" }}>
          <div className="strategy-icon" aria-hidden="true">
            <GoRocket />
            <span className="icon-label">Mission</span>
          </div>
          <h4 id="mission-title" className="strategy-title">
            To build long term relationships with our customers, clients and
            provide exceptional customer services by pursuing business through
            dedication and hard work.
          </h4>
        </div>
      </article>
    </section>
  );
};

export default CompanyStrategy;
