import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import rooms from "./roomData";
import "../stylesheet/Rooms.css";

const Rooms = () => {
  const [search, setSearch] = useState("");
  const filteredRooms = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return rooms;
    return rooms.filter((room) =>
      `${room.title} ${room.summary} ${room.label} ${room.highlights.join(" ")}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <main className="rooms-page">
    <section className="rooms-intro" aria-labelledby="rooms-title">
      <div className="rooms-intro__heading">
        <p className="rooms-eyebrow">ROOMS & SUITES</p>
        <h1 id="rooms-title">
          Your own space
          <br />
          to <em>slow down.</em>
        </h1>
      </div>
      <div className="rooms-intro__copy">
        <p>
          Whether you’re away for a night or settling in for longer, find a
          comfortable place to rest, reset, and feel at home.
        </p>
        <a className="rooms-jump-link" href="#room-collection">
          Browse the rooms <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>

    <section
      className="rooms-collection"
      id="room-collection"
      aria-label="Guest room collection"
    >
      <div className="rooms-toolbar">
        <div className="rooms-toolbar__count" aria-live="polite">
          <strong>{filteredRooms.length}</strong>
          <span>{filteredRooms.length === 1 ? "room" : "rooms"} to explore</span>
        </div>
        <label className="rooms-search">
          <span className="rooms-search__icon" aria-hidden="true">⌕</span>
          <span className="sr-only">Search rooms</span>
          <input
            type="search"
            value={search}
            placeholder="Search rooms or features"
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} aria-label="Clear room search">
              ×
            </button>
          )}
        </label>
      </div>

      {filteredRooms.length > 0 ? (
        <div className="rooms-grid">
          {filteredRooms.map((room) => (
          <article className="room-card" key={room.slug}>
            <div className="room-card__image-wrap">
              <img src={room.image} alt={room.alt} loading="lazy" />
              <span className="room-card__number">ROOM {room.number}</span>
            </div>
            <div className="room-card__body">
              <h2>{room.title}</h2>
              <p>{room.summary}</p>
              <Link className="room-card__link" to={`/rooms/${room.slug}`}>
                View room details <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
        </div>
      ) : (
        <div className="rooms-empty">
          <h2>No rooms match “{search}”</h2>
          <p>Try a different room name or feature.</p>
          <button type="button" onClick={() => setSearch("")}>Clear search</button>
        </div>
      )}
    </section>

    <section className="rooms-cta" aria-labelledby="rooms-cta-title">
      <div>
        <p className="rooms-eyebrow">LET’S PLAN YOUR STAY</p>
        <h2 id="rooms-cta-title">Have a room in mind?</h2>
      </div>
      <Link className="rooms-button" to="/contact">
        Get in touch <span aria-hidden="true">↗</span>
      </Link>
    </section>
    </main>
  );
};

export default Rooms;
