function Navbar() {
	return (
		<header className="site-header">
			<div className="site-brand">Food Paradise</div>
			<nav className="site-nav" aria-label="Primary">
				<a href="#home">Home</a>
				<a href="#menu">Menu</a>
				<a href="#gallery">Gallery</a>
				<a href="#location">Location</a>
				<a href="#contact">Contact</a>
				<a className="nav-cta" href="#contact">Reserve Table</a>
			</nav>
		</header>
	);
}

export default Navbar;
