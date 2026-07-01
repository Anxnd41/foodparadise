function Home() {
	return (
		<section id="home" className="hero-section">
			<div className="hero-copy">
				<p className="eyebrow">Authentic taste, local ingredients</p>
				<h1>Fresh meals made for people who want more than fast food.</h1>
				<p>
					Discover a simple, welcoming restaurant experience with bold flavors,
					daily specials, and friendly service.
				</p>
				<div className="hero-actions">
					<a className="primary" href="#menu">
						Explore Menu
					</a>
					<a className="secondary" href="#contact">
						Book a Visit
					</a>
				</div>
			</div>
			<aside className="hero-panel" aria-label="Highlights">
				<div>
					<h2>Today’s highlights</h2>
					<p>
						Chef-crafted meals, fresh prep, and a relaxed space built for
						small groups and family dinners.
					</p>
				</div>
				<div className="hero-stats">
					<div className="stat">
						<strong>15 min</strong>
						<span>Average service time</span>
					</div>
					<div className="stat">
						<strong>4.9/5</strong>
						<span>Guest rating</span>
					</div>
				</div>
			</aside>
		</section>
	);
}

export default Home;
