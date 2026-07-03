import { useState } from "react";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Menu from "./component/menu";
import PhotoGallery from "./component/photoGallery";
import Location from "./component/location";
import Review from "./component/review";
import Contact from "./component/contact";
import Footer from "./component/footer";
import { CartProvider } from "./context/CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <CartProvider>
      <main className="page-shell">
        <Navbar />
        <Home />
        <div className="sections-grid">
          <Menu />
          <PhotoGallery />
          <Location />
          <Review />
          <Contact />
        </div>
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
