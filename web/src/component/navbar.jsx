import logo from "./assets/logo/image.jpeg";

function Navbar() {
  return (
    <header className="site-header">
      {/* ── Left nav ── */}
      <nav className="site-nav site-nav-left" aria-label="Primary navigation left">
        <a href="#home">HOME</a>
        <a href="#menu">MENU</a>
        <a href="#gallery">GALLERY</a>
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
        <a href="#location">LOCATION</a>
        <a href="#contact">CONTACT</a>
        <a className="nav-cta" href="#contact">RESERVE</a>
      </nav>
    </header>
  );
}

export default Navbar;
