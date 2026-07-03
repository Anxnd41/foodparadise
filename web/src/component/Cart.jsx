import "./cart.css";

function Cart({ items, isOpen, onClose, onRemoveItem, onUpdateQuantity }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) {
    return (
      <div className="cart-floating-btn">
        {itemCount > 0 && <div className="cart-badge">{itemCount}</div>}
        <button onClick={() => onClose?.()} className="cart-icon-btn">
          🛒
        </button>
      </div>
    );
  }

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="cart-close-btn" onClick={() => onClose?.()}>
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    className="cart-qty-btn"
                    onClick={() => onUpdateQuantity?.(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="cart-qty-btn"
                    onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">₹{item.price * item.quantity}</div>
                <button 
                  className="cart-item-remove"
                  onClick={() => onRemoveItem?.(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>₹{total}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery:</span>
              <span className="free-delivery">FREE</span>
            </div>
            <div className="cart-summary-total">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="cart-checkout-btn">Checkout ({itemCount})</button>
        </>
      )}
    </div>
  );
}

export default Cart;
