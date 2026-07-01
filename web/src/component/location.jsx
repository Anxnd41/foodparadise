import OutletCard from "./Outletcard";
import outlets from "../data/outlets";

const Location = () => {
  return (
    <section id="location">
      <div className="location-section">
        {outlets.map(outlet => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
    </section>
  );
};

export default Location;