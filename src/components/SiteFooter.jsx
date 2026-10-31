import { Link } from "react-router-dom";
import { RiHotelFill } from "react-icons/ri";
import "../stylesheet/SiteFooter.css";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <Link className="site-footer__brand" to="/" aria-label="Hotel home">
        <span className="site-footer__mark" aria-hidden="true">
          <RiHotelFill />
        </span>
        <span>
          <strong>Hotel</strong>
          <small>A PLACE TO PAUSE</small>
        </span>
      </Link>

      <p className="site-footer__note">
        Make a little room for rest, good company, and moments worth keeping.
      </p>

      <nav className="site-footer__links" aria-label="Footer navigation">
        <Link to="/rooms">Rooms</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
    <div className="site-footer__bottom">
      <span>© {new Date().getFullYear()} Hotel</span>
      <a href="mailto:codewithbishal7@gmail.com">codewithbishal7@gmail.com</a>
      <a className="site-footer__top" href="#root">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </div>
  </footer>
);

export default SiteFooter;
