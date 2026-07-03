import { useState } from "react";
import brownieImg from "../component/assets/menu/brownie.jpg";
import dahibhalleImg from "../component/assets/menu/dahibhalle.jpg";
import momosImg from "../component/assets/menu/momos.jpg";
import ramenImg from "../component/assets/menu/ramen.jpg";
import MenuModal from "./MenuModal";

function Menu({ onOpenCart }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const dishes = [
        { id: 1, name: "Momos", description: "Delicious steamed dumplings filled with meat and spices", image: momosImg },
        { id: 2, name: "Ramen", description: "Authentic Japanese noodle soup with rich broth", image: ramenImg },
        { id: 3, name: "Dahi Bhalle", description: "Soft lentil fritters in creamy yogurt sauce", image: dahibhalleImg },
        { id: 4, name: "Brownie", description: "Rich, fudgy chocolate brownie dessert", image: brownieImg }
    ];

    const handleAddToCart = (item) => {
        onOpenCart?.(item);
    };

    return (
        <>
            <section id="menu" className="content-section">
                <div className="menu-header">
                    <h2>Daily Specials</h2>
                    <button className="explore-btn" onClick={() => setIsMenuOpen(true)}>
                        Explore Menu
                    </button>
                </div>
                <div className="dishes-grid">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="dish-card">
                            <img src={dish.image} alt={dish.name} className="dish-image" />
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <MenuModal 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)}
                onAddToCart={handleAddToCart}
            />
        </>
    );
}

export default Menu;
