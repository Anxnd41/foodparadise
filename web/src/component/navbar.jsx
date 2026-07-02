import logo from "./assets/logo/image.png";

function Navbar() {
  return (
    <header className="site-header">
      {/* ── Left nav ── */}
      <nav className="site-nav site-nav-left" aria-label="Primary navigation left">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
      </nav>

      {/* ── Centred logo ── */}
      <div className="site-brand-center">
        <a href="#home" className="brand-logo-link" aria-label="Food Paradise – Home">
          <img
            src={logo}
            alt="Food Paradise logo"
            className="brand-logo-img"
          />
        </a>
      </div>

      {/* ── Right nav ── */}
      <nav className="site-nav site-nav-right" aria-label="Primary navigation right">
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
        <a className="nav-cta" href="#contact">Reserve</a>
      </nav>
    </header>
  );
}

export default Navbar;
