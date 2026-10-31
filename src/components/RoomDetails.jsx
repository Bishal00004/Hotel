import { Link, Navigate, useParams } from "react-router-dom";
import rooms from "./roomData";
import "../stylesheet/RoomDetails.css";

const RoomDetails = () => {
  const { roomSlug } = useParams();
  const roomIndex = rooms.findIndex((item) => item.slug === roomSlug);
  const room = rooms[roomIndex];

  if (!room) return <Navigate to="/rooms" replace />;

  const previousRoom = rooms[(roomIndex - 1 + rooms.length) % rooms.length];
  const nextRoom = rooms[(roomIndex + 1) % rooms.length];

  return (
    <main className="room-details-page">
      <section className="room-details-intro" aria-labelledby="room-detail-title">
        <nav className="room-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/rooms">Rooms</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{room.title}</span>
        </nav>

        <p className="room-details-eyebrow">
          ROOM {room.number} <span aria-hidden="true">/</span> {room.label}
        </p>
        <h1 id="room-detail-title">{room.title}</h1>
        <p className="room-details-intro__summary">{room.summary}</p>
      </section>

      <figure className="room-details-photo">
        <img src={room.image} alt={room.alt} />
        <figcaption>{room.label}</figcaption>
      </figure>

      <section className="room-details-story" aria-labelledby="room-story-title">
        <div className="room-details-story__copy">
          <p className="room-details-eyebrow">A CLOSER LOOK</p>
          <h2 id="room-story-title">A room to make your own.</h2>
          <p>{room.description}</p>
        </div>

        <div className="room-details-highlights">
          <p className="room-details-eyebrow">ROOM NOTES</p>
          <ul>
            {room.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <Link className="room-details-contact" to="/contact">
            Ask about this room <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <nav className="room-pagination" aria-label="Browse other rooms">
        <Link to={`/rooms/${previousRoom.slug}`}>
          <span>← Previous room</span>
          <strong>{previousRoom.title}</strong>
        </Link>
        <Link to="/rooms" className="room-pagination__all">
          All rooms
        </Link>
        <Link to={`/rooms/${nextRoom.slug}`}>
          <span>Next room →</span>
          <strong>{nextRoom.title}</strong>
        </Link>
      </nav>
    </main>
  );
};

export default RoomDetails;
