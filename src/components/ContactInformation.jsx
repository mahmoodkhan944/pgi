import React from "react";
import "../styles/contactinfo.scss";

const ContactInformation = () => {
  return (
    <div className="contactinfo">
      <main>
        <h1>CONTACT US</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Full Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@xyz.com" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>

          <iframe
            title="image"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.19358550057!2d73.88934062426942!3d18.474888470569997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea62d7e17345%3A0x2934167ea6282a00!2sHILL%20MIST%20GARDEN%2C%20Kausar%20Baugh%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1699938802936!5m2!1sen!2sin"
            width="400"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </form>
      </main>
    </div>
  );
};

export default ContactInformation;
