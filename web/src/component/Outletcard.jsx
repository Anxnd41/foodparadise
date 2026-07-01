const OutletCard = ({ outlet }) => {
  return (
    <div className="location-card">
      <img
        src={outlet.image}
        alt={outlet.title}
        className="location-card-image"
      />
      <div className="location-overlay"></div>
      <div className="location-content">
        <h3 className="location-address">
          <span>{outlet.title}</span>
          <span>{outlet.city}</span>
          <span>{outlet.postcode}</span>
        </h3>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${outlet.title} ${outlet.city} ${outlet.postcode}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default OutletCard;