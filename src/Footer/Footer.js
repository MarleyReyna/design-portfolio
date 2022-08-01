import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="book">
        <div>
          <h5>Book a call with me</h5>
          <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <button className="consultation">Free Consultation</button>
      </section>
      <section className="navbar">
        <img src={"/assets/logo.svg"} alt="Design Business Logo" />
        <button className="consultation">Free Consultation</button>
      </section>
    </footer>
  );
};

export default Footer;
