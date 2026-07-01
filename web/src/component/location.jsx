import outlets from "../data/outlets";

const openOutlets   = outlets.filter(o => o.status === "open");
const comingOutlets = outlets.filter(o => o.status === "coming_soon");

/* ── Icon helpers ── */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="loc-pin-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="loc-cal-icon">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
);

/* ── Open outlet card ── */
const OpenCard = ({ outlet }) => (
  <div className="loc-open-card">
    <img src={outlet.image} alt={outlet.title} className="loc-card-img" />
    <div className="loc-card-overlay" />
    <span className="loc-open-badge">
      <span className="loc-open-dot" /> Open Now
    </span>
    <div className="loc-open-content">
      <h3 className="loc-open-title">{outlet.title}</h3>
      <p className="loc-open-area">
        <PinIcon /> {outlet.area}
      </p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.mapsQuery || outlet.title)}`}
        target="_blank" rel="noopener noreferrer"
        className="loc-directions-btn"
      >
        Get Directions
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  </div>
);

/* ── Coming soon card ── */
const SoonCard = ({ outlet }) => (
  <div className="loc-soon-card">
    <img src={outlet.image} alt={outlet.title} className="loc-card-img" />
    <div className="loc-soon-overlay" />
    <span className="loc-soon-badge">Coming Soon</span>
    <div className="loc-soon-content">
      <h3 className="loc-soon-title">{outlet.title}</h3>
      <p className="loc-soon-area">
        <PinIcon /> {outlet.area}
      </p>
      <p className="loc-opening-label">
        <CalendarIcon /> Opening Soon
      </p>
    </div>
  </div>
);

/* ── Features strip ── */
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Signature Flavors",
    desc: "Crafted with passion and the finest ingredients.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Elegant Ambience",
    desc: "Beautiful spaces designed for memorable experiences.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: "Expertly Curated",
    desc: "Every dish is a masterpiece by our master chefs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    label: "Across Top Cities",
    desc: "Bringing our dining experience closer to you.",
  },
];

/* ── Main component ── */
const Location = () => (
  <section id="location" className="loc-section">

    {/* Header */}
    <div className="loc-header">
      <p className="loc-eyebrow">Our Outlets</p>
      <div className="loc-eyebrow-divider">
        <span className="loc-div-line" />
        <svg className="loc-div-gem" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
        </svg>
        <span className="loc-div-line" />
      </div>
      <h2 className="loc-headline">Experience Our Restaurants</h2>
      <p className="loc-subtext">
        From cozy corners to grand dining spaces, find a restaurant near you<br />
        and enjoy our signature flavors.
      </p>
    </div>

    {/* Body */}
    <div className="loc-body">

      {/* Open Now row */}
      <div className="loc-row-header">
        <div className="loc-row-label">
          <span>Open Now</span>
          <span className="loc-row-label-bar" />
        </div>
        <a href="#" className="loc-view-all">
          View All Outlets
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
      <div className="loc-open-grid">
        {openOutlets.map(o => <OpenCard key={o.id} outlet={o} />)}
      </div>

      {/* Coming Soon row */}
      <div className="loc-row-header" style={{ marginTop: "2.5rem" }}>
        <div className="loc-row-label">
          <span>Coming Soon</span>
          <span className="loc-row-label-bar loc-row-label-bar--soon" />
        </div>
        <a href="#" className="loc-view-all">
          View All Upcoming
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
      <div className="loc-soon-grid">
        {comingOutlets.map(o => <SoonCard key={o.id} outlet={o} />)}
      </div>

    </div>

    {/* Features strip */}
    <div className="loc-features">
      {features.map((f, i) => (
        <div key={i} className="loc-feature-item">
          <span className="loc-feature-icon">{f.icon}</span>
          <div>
            <p className="loc-feature-label">{f.label}</p>
            <p className="loc-feature-desc">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>

  </section>
);

export default Location;