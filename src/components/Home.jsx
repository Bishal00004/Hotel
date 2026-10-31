import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import siteAsset from "../utils/siteAsset";
import "../stylesheet/Home.css";

const Home = () => {
  return (
    <main className="hotel-home">
      <section className="hotel-hero" aria-labelledby="hero-title">
        <video
          className="hotel-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={siteAsset("video.mp4")} type="video/mp4" />
        </video>
        <div className="hotel-hero__overlay" aria-hidden="true" />

        <div className="hotel-hero__content">
          <p className="hotel-eyebrow hotel-hero__eyebrow">
            A PLACE TO PAUSE
          </p>
          <h1 id="hero-title">
            Make room
            <br />
            for <em>something</em>
            <br />
            wonderful.
          </h1>
          <p className="hotel-hero__description">
            Settle in, slow down, and let your next stay become part of the story.
          </p>
          <div className="hotel-hero__actions">
            <a className="hotel-button" href="#home-booking">
              Book your stay <span aria-hidden="true">↘</span>
            </a>
            <Link className="hotel-button hotel-button--outline" to="/rooms">
              Explore rooms <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <a className="hotel-hero__scroll" href="#our-story">
          <span className="hotel-hero__scroll-line" aria-hidden="true" />
          Scroll to explore
        </a>
        <span className="hotel-hero__caption">YOUR STAY STARTS HERE</span>
      </section>

      <BookingForm />

      <section className="hotel-intro" id="our-story" aria-labelledby="intro-title">
        <div className="hotel-intro__copy">
          <p className="hotel-eyebrow">THE ART OF A GOOD STAY</p>
          <h2 id="intro-title">
            A little more time
            <br />
            for <em>yourself.</em>
          </h2>
        </div>
        <div className="hotel-intro__details">
          <p>
            The best moments often happen between the plans. Find a comfortable
            place to land, a gentler pace for the day, and space to enjoy the
            little things along the way.
          </p>
          <Link className="hotel-underlined-link" to="/gallery">
            Take a look around <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="hotel-experiences" aria-labelledby="experience-title">
        <div className="hotel-section-heading">
          <p className="hotel-eyebrow">MADE FOR YOUR MOMENT</p>
          <h2 id="experience-title">Stay your own way.</h2>
        </div>

        <div className="hotel-experience-grid">
          <article className="hotel-experience-card">
            <span className="hotel-experience-card__number">01</span>
            <h3>Space to settle in</h3>
            <p>Thoughtful spaces make it easy to arrive, unpack, and feel at ease.</p>
          </article>
          <article className="hotel-experience-card">
            <span className="hotel-experience-card__number">02</span>
            <h3>Time at your pace</h3>
            <p>Make a plan, change the plan, or leave the day beautifully open.</p>
          </article>
          <article className="hotel-experience-card">
            <span className="hotel-experience-card__number">03</span>
            <h3>Moments to remember</h3>
            <p>Bring your people, find your quiet, and make the stay your own.</p>
          </article>
        </div>
      </section>

      <section className="hotel-booking" aria-labelledby="booking-title">
        <div>
          <p className="hotel-eyebrow">YOUR NEXT CHAPTER</p>
          <h2 id="booking-title">Come make yourself at home.</h2>
        </div>
        <Link className="hotel-button hotel-button--light" to="/rooms">
          Find your stay <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
};

export default Home;
