import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./menuInterface.css";
import momosImg from "./assets/menu/momos.jpg";
import ramenImg from "./assets/menu/ramen.jpg";
import brownieImg from "./assets/menu/brownie.jpg";
import dahibhalleImg from "./assets/menu/dahibhalle.jpg";
import dosaImg from "./assets/menu/Dosa.jpg";

const MenuInterface = ({ isOpen, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState("starters");
    const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

    const categories = [
        { id: "starters", name: "Starters", icon: "🥘" },
        { id: "mains", name: "Main Courses", icon: "🍜" },
        { id: "desserts", name: "Desserts", icon: "🍰" },
        { id: "drinks", name: "Beverages", icon: "🥤" }
    ];

    const menuItems = {
        starters: [
            { id: 1, name: "Momos", price: 120, description: "Delicious steamed dumplings filled with meat and spices", image: momosImg, veg: false },
            { id: 2, name: "Dahi Bhalle", price: 100, description: "Soft lentil fritters in creamy yogurt sauce", image: dahibhalleImg, veg: true },
            { id: 3, name: "Dosa", price: 130, description: "Crispy South Indian crepe served with sambar and chutney", image: dosaImg, veg: true }
        ],
        mains: [
            { id: 4, name: "Ramen", price: 250, description: "Authentic Japanese noodle soup with rich broth", image: ramenImg, veg: false },
            { id: 5, name: "Butter Chicken", price: 320, description: "Tender chicken in creamy tomato sauce", image: momosImg, veg: false },
            { id: 6, name: "Paneer Tikka", price: 280, description: "Marinated and grilled cottage cheese cubes", image: dahibhalleImg, veg: true }
        ],
        desserts: [
            { id: 7, name: "Brownie", price: 150, description: "Rich, fudgy chocolate brownie dessert", image: brownieImg, veg: true },
            { id: 8, name: "Gulab Jamun", price: 120, description: "Sweet milk solids in sugar syrup", image: brownieImg, veg: true },
            { id: 9, name: "Cheesecake", price: 200, description: "Creamy New York style cheesecake", image: brownieImg, veg: true }
        ],
        drinks: [
            { id: 10, name: "Mango Lassi", price: 80, description: "Refreshing yogurt-based mango drink", image: ramenImg, veg: true },
            { id: 11, name: "Cold Coffee", price: 100, description: "Iced coffee with whipped cream", image: ramenImg, veg: true },
            { id: 12, name: "Fresh Juice", price: 90, description: "Freshly squeezed mixed fruit juice", image: ramenImg, veg: true }
        ]
    };

    const currentItems = menuItems[selectedCategory] || [];

    if (!isOpen) return null;

    return (
        <div className="menu-interface-overlay" onClick={onClose}>
            <div className="menu-interface" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="menu-close-btn" onClick={onClose}>✕</button>

                {/* Main Content */}
                <div className="menu-main-content">
                    {/* Left Sidebar - Categories */}
                    <div className="menu-sidebar">
                        <h3>Categories</h3>
                        <div className="categories-list">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    <span className="category-icon">{cat.icon}</span>
                                    <span className="category-name">{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Center - Menu Items */}
                    <div className="menu-items-section">
                        <h2>{categories.find(c => c.id === selectedCategory)?.name}</h2>
                        <div className="menu-items-grid">
                            {currentItems.map((item) => (
                                <div key={item.id} className="menu-item-card">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.name} />
                                        <span className={`veg-badge ${item.veg ? "vegetarian" : "non-veg"}`}>
                                            {item.veg ? "Veg" : "Non-Veg"}
                                        </span>
                                    </div>
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <div className="item-footer">
                                            <span className="item-price">₹{item.price}</span>
                                            <button
                                                className="item-add-btn"
                                                onClick={() => addToCart({
                                                    id: item.id,
                                                    name: item.name,
                                                    price: item.price,
                                                    image: item.image
                                                })}
                                            >
                                                Add +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar - Cart */}
                    <div className="menu-cart-sidebar">
                        <h3>Your Cart</h3>
                        <div className="cart-items-list">
                            {cart.length === 0 ? (
                                <p className="empty-cart">Your cart is empty</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h5>{item.name}</h5>
                                            <p>₹{item.price}</p>
                                        </div>
                                        <div className="cart-item-actions">
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                −
                                            </button>
                                            <span className="qty-value">{item.quantity}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                            title="Remove"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Cart Summary */}
                        {cart.length > 0 && (
                            <div className="cart-summary">
                                <div className="summary-row">
                                    <span>Items:</span>
                                    <strong>{getTotalItems()}</strong>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <strong>₹{getTotalPrice()}</strong>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuInterface;
