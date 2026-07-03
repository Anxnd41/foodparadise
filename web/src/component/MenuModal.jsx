import { useState } from "react";
import { menuCategories } from "../data/menu-items";
import "./menu-modal.css";

function MenuModal({ isOpen, onClose, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [quantities, setQuantities] = useState({});

  if (!isOpen) return null;

  const currentCategory = menuCategories[selectedCategory];

  const handleQuantityChange = (itemId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, value),
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    if (quantity > 0) {
      onAddToCart({
        ...item,
        quantity,
      });
      setQuantities((prev) => ({
        ...prev,
        [item.id]: 0,
      }));
    }
  };

  return (
    <div className="menu-modal-overlay" onClick={onClose}>
      <div className="menu-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="menu-modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="menu-modal-container">
          {/* Sidebar Categories */}
          <div className="menu-sidebar">
            <h2 className="menu-sidebar-title">Categories</h2>
            <div className="menu-categories-list">
              {menuCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`menu-category-btn ${
                    selectedCategory === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(index)}
                >
                  <span className="menu-category-icon">{category.icon}</span>
                  <span className="menu-category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="menu-main-content">
            <div className="menu-header">
              <h1>{currentCategory.name}</h1>
              <div className="menu-filters">
                <button className="menu-filter-btn">Veg</button>
                <button className="menu-filter-btn">Non-Veg</button>
              </div>
            </div>

            <div className="menu-items-grid">
              {currentCategory.items.map((item) => (
                <div key={item.id} className="menu-item-card">
                  <div className="menu-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-item-image"
                    />
                  </div>
                  <div className="menu-item-info">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-footer">
                      <div className="menu-item-price">₹{item.price}</div>
                      <div className="menu-item-actions">
                        <div className="menu-quantity-control">
                          <button
                            className="qty-btn"
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                (quantities[item.id] || 0) - 1
                              )
                            }
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={quantities[item.id] || 0}
                            onChange={(e) =>
                              handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                            }
                            className="qty-input"
                          />
                          <button
                            className="qty-btn"
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                (quantities[item.id] || 0) + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="menu-add-btn"
                          onClick={() => handleAddToCart(item)}
                          disabled={!quantities[item.id] || quantities[item.id] === 0}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
