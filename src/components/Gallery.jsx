import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import siteAsset from "../utils/siteAsset";
import "../stylesheet/Gallery.css";

const galleryImages = [
  {
    src: siteAsset("Images/gallary/out.jpg"),
    title: "Golden hour by the water",
    category: "The grounds",
    alt: "A resort pool and garden beneath a colorful sunset",
  },
  {
    src: siteAsset("Images/gallary/food-day.jpg"),
    title: "A place at the table",
    category: "Dining",
    alt: "A relaxed restaurant table set for a meal",
  },
  {
    src: siteAsset("Images/gallary/food night.jpg"),
    title: "An evening to savor",
    category: "Dining",
    alt: "An evening meal served beside a city view",
  },
  {
    src: siteAsset("Images/gallary/buff.jpg"),
    title: "Good food, shared slowly",
    category: "Dining",
    alt: "A plated meal in a softly lit restaurant",
  },
  {
    src: siteAsset("Images/gallary/images.jpg"),
    title: "A warm welcome",
    category: "The hotel",
    alt: "A hotel entrance framed by gardens at dusk",
  },
  {
    src: siteAsset("Images/gallary/garden.jpg"),
    title: "A quiet corner outdoors",
    category: "The grounds",
    alt: "A green garden seating area in the afternoon light",
  },
  {
    src: siteAsset("Images/gallary/inside.jpg"),
    title: "A room with a view",
    category: "Stay awhile",
    alt: "A bright hotel room opening onto a city view",
  },
];

const filters = ["All moments", "Dining", "The grounds", "The hotel", "Stay awhile"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All moments");
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const visibleImages = galleryImages
    .map((image, index) => ({ ...image, index }))
    .filter((image) => activeFilter === "All moments" || image.category === activeFilter);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      if (triggerRef.current && document.contains(triggerRef.current)) {
        triggerRef.current.focus();
      }
    };
  }, [selectedImage]);

  return (
  <main className="gallery-page">
    <section className="gallery-intro" aria-labelledby="gallery-title">
      <div>
        <p className="gallery-eyebrow">A CLOSER LOOK</p>
        <h1 id="gallery-title">
          The hotel, in <em>moments.</em>
        </h1>
      </div>
      <p className="gallery-intro__description">
        From slow mornings to evenings around the table, take a look at the
        spaces and little moments that make a stay memorable.
      </p>
    </section>

    <div className="gallery-toolbar" aria-label="Filter gallery images">
      <p>Browse by moment</p>
      <div className="gallery-filters" role="group" aria-label="Gallery categories">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "is-active" : ""}
            type="button"
            aria-pressed={activeFilter === filter}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <span className="gallery-toolbar__count" aria-live="polite">
        {visibleImages.length} {visibleImages.length === 1 ? "photo" : "photos"}
      </span>
    </div>

    <section className="gallery-showcase" aria-label="Hotel photo gallery">
      <div className="gallery-grid">
        {visibleImages.map((image) => (
          <figure
            className={`gallery-card gallery-card--${image.index + 1}`}
            key={image.src}
          >
            <button
              className="gallery-card__open"
              type="button"
              aria-label={`View photo: ${image.title}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedImage(image);
              }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
            <figcaption className="gallery-card__caption">
              <span>{image.category}</span>
              <h2>{image.title}</h2>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

    {selectedImage && (
      <div
        className="gallery-lightbox"
        role="presentation"
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="gallery-lightbox__panel"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              closeButtonRef.current?.focus();
            }
          }}
        >
          <button
            ref={closeButtonRef}
            className="gallery-lightbox__close"
            type="button"
            aria-label="Close photo"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <div className="gallery-lightbox__caption">
            <span>{selectedImage.category}</span>
            <h2>{selectedImage.title}</h2>
          </div>
        </div>
      </div>
    )}

    <section className="gallery-cta" aria-labelledby="gallery-cta-title">
      <div>
        <p className="gallery-eyebrow">READY TO SETTLE IN?</p>
        <h2 id="gallery-cta-title">Find a room that feels right.</h2>
      </div>
      <Link className="gallery-button" to="/rooms">
        Explore our rooms <span aria-hidden="true">↗</span>
      </Link>
    </section>
  </main>
  );
};

export default Gallery;
