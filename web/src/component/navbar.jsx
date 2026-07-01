function Navbar() {
	return (
		<header className="site-header">
			<nav className="site-nav site-nav-left" aria-label="Primary">
				<a href="#home">HOME</a>
				<a href="#menu">MENU</a>
				<a href="#gallery">GALLERY</a>
			</nav>
			
			<div className="site-brand-center">
				<div className="brand-circle">
					<div className="brand-text">
						<span className="brand-name">FOOD PARADISE</span>
						<span className="brand-tagline">Grills & Wine Bar</span>
						<span className="brand-est">EST. 2024</span>
					</div>
				</div>
			</div>
			
			<nav className="site-nav site-nav-right" aria-label="Primary">
				<a href="#location">LOCATION</a>
				<a href="#contact">CONTACT</a>
				<a className="nav-cta" href="#contact">RESERVE</a>
			</nav>
		</header>
	);
}

export default Navbar;
