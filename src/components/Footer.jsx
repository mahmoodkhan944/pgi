import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLeft">
          <span className="footerTitle">
            <h1>
              PG<em>i</em>
            </h1>
            <p>
              Copyright &copy; 
            </p>Designed by 
            <p1 class="name"> Mahmood Khan</p1>
          </span>
        </div>
        <div className="footerCenter"></div>
        <div className="footerRight">
          <div className="footerItem">
            <span className="footerRight">FOLLOW US</span>
            <div className="footerSocial">
              <a
                href="https://www.facebook.com/mahmood.tahiri/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="facebook fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://twitter.com/Electroozz1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="twitter fa-brands fa-square-twitter"></i>
              </a>
              <a
                href="https://in.pinterest.com/mahmoodkhan944/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="pinterest fa-brands fa-square-pinterest"></i>
              </a>
              <a
                href="https://www.instagram.com/shopping_hunk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="instagram fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
