import OutletCard from "./Outletcard";
import outlets from "../data/outlets";

const Location = () => {
  return (
    <section id="location" className="content-section">
      <div className="location-header">
        <h2>Explore Our Outlets</h2>
        <p>Visit us at convenient neighborhood spots with easy access and exceptional service</p>
      </div>
      <div className="location-section">
        {outlets.map(outlet => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
    </section>
  );
};

export default Location;