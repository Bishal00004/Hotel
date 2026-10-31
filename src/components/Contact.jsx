import { Link } from "react-router-dom";
import siteAsset from "../utils/siteAsset";
import "../stylesheet/Contact.css";

const Contact = () => (
  <main className="contact-page">
    <section className="contact-intro" aria-labelledby="contact-title">
      <p className="contact-eyebrow">WE’D LOVE TO HEAR FROM YOU</p>
      <h1 id="contact-title">
        Let’s start with
        <br />
        a <em>hello.</em>
      </h1>
      <p className="contact-intro__text">
        Have a question or planning a stay? Send a note and Bishal will be happy
        to help.
      </p>
    </section>

    <section className="contact-card" aria-label="Hotel contact details">
      <div className="contact-card__image">
        <img
          src={siteAsset("Images/gallary/inside.jpg")}
          alt="A welcoming hotel room with a view through open doors"
        />
        <span>YOUR NEXT STAY STARTS WITH A CONVERSATION</span>
      </div>

      <div className="contact-card__details">
        <p className="contact-eyebrow">YOUR CONTACT</p>
        <h2>Bishal Thapa</h2>
        <p className="contact-card__description">
          Reach out directly by email for questions, details, or help planning
          your visit.
        </p>
        <a className="contact-email" href="mailto:codewithbishal7@gmail.com">
          <span>Email</span>
          <span>codewithbishal7@gmail.com</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          className="contact-button"
          href="mailto:codewithbishal7@gmail.com?subject=Hotel%20stay%20inquiry"
        >
          Write an email <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section className="contact-footer">
      <p>Still exploring?</p>
      <Link to="/rooms">Take a look at the rooms <span aria-hidden="true">↗</span></Link>
    </section>
  </main>
);

export default Contact;
