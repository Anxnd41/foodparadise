import "./mobile-menu.css";

function MobileMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: "HOME", href: "#home" },
    { name: "HISTORY", href: "#history" },
    { name: "GRILLS", href: "#menu" },
    { name: "WINES", href: "#wines" },
    { name: "EVENTS", href: "#events" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleMenuItemClick = (href) => {
    onClose();
    // Scroll to section
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className={`mobile-menu-toggle ${isOpen ? "active" : ""}`}
        onClick={onClose}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={onClose}></div>
      )}

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mobile-menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item-wrapper">
              <a
                href={item.href}
                className="mobile-menu-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item.href);
                }}
              >
                {item.name}
              </a>
              {index < menuItems.length - 1 && (
                <div className="mobile-menu-divider"></div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
