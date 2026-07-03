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
