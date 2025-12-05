import React from "react";
import "../styles/corevalues.scss";


const CoreValues = () => {
  return (
    <div className="page-root">
      {/* NAV remains outside if you already have a header component */}
      <main className="main-content">
        <section className="home5" id="corevalues">
          <div className="content-box">
            <h1>CORE VALUES</h1>

            <p className="line">
              • We believe in achieving cent percentage customer satisfaction.
            </p>

            <p className="line">
              • We integrate honesty, integrity and business ethics into all aspects
              of our business functioning.
            </p>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default CoreValues;
