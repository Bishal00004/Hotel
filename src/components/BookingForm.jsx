import { useState } from "react";
import rooms from "./roomData";
import "../stylesheet/BookingForm.css";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const nextDate = (dateValue) => {
  if (!dateValue) return "";
  const [year, month, day] = dateValue.split("-").map(Number);
  return formatDate(new Date(year, month - 1, day + 1));
};

const BookingForm = () => {
  const [roomSlug, setRoomSlug] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const today = formatDate(new Date());

  const submitBookingRequest = (event) => {
    event.preventDefault();
    const room = rooms.find((item) => item.slug === roomSlug);
    if (!room) return;

    const subject = encodeURIComponent(`Booking request: ${room.title}`);
    const body = encodeURIComponent(
      `Hello Bishal,\n\nI would like to ask about booking ${room.title}.\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\n\nPlease let me know if this room is available.\n\nThank you.`,
    );
    window.location.href = `mailto:codewithbishal7@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="home-booking" id="home-booking" aria-labelledby="home-booking-title">
      <div className="home-booking__heading">
        <p className="home-booking__eyebrow">PLAN YOUR STAY</p>
        <h2 id="home-booking-title">Find your room.</h2>
      </div>

      <form className="home-booking__form" onSubmit={submitBookingRequest}>
        <label>
          Room
          <select
            required
            value={roomSlug}
            onChange={(event) => setRoomSlug(event.target.value)}
          >
            <option value="" disabled>
              Choose a room
            </option>
            {rooms.map((room) => (
              <option value={room.slug} key={room.slug}>
                {room.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          Check-in
          <input
            type="date"
            value={checkIn}
            min={today}
            required
            onChange={(event) => {
              const nextCheckIn = event.target.value;
              setCheckIn(nextCheckIn);
              if (checkOut && checkOut <= nextCheckIn) setCheckOut("");
            }}
          />
        </label>

        <label>
          Check-out
          <input
            type="date"
            value={checkOut}
            min={checkIn ? nextDate(checkIn) : today}
            required
            onChange={(event) => setCheckOut(event.target.value)}
          />
        </label>

        <label>
          Guests
          <select value={guests} onChange={(event) => setGuests(event.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option value={count} key={count}>
                {count} {count === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>

        <button className="home-booking__submit" type="submit">
          Book now <span aria-hidden="true">↗</span>
        </button>
      </form>

      <p className="home-booking__note">
        Your request opens in email. Bishal will confirm availability and details.
      </p>
    </section>
  );
};

export default BookingForm;
