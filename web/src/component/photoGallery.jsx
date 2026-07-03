import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.png";
import "./photoGallery.css";

// ------------------------
// Animation variants
// ------------------------
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

// ------------------------
// Gallery photo tile
// ------------------------
function GalleryItem({ src, alt }) {
  return (
    <motion.div className="gallery-item" variants={itemVariants}>
      <img src={src} alt={alt} loading="lazy" />
    </motion.div>
  );
}

// ------------------------
// Tan info card (centre tile)
// ------------------------
function GalleryInfoCard() {
  return (
    <motion.div className="gallery-card" variants={itemVariants}>
      <span className="gallery-card-line" />
      <h2>
        Photo
        <br />
        Gallery
      </h2>
      <button className="arrow-btn" aria-label="View photo gallery">
        <FiChevronRight />
      </button>
    </motion.div>
  );
}

// ------------------------
// Section
// ------------------------
export default function PhotoGallery() {
  return (
    <section id="gallery">
      <motion.div
        className="photo-gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* ── Top row ── */}
        <GalleryItem src={img1} alt="Guests toasting with wine glasses" />
        <GalleryInfoCard />
        <GalleryItem src={img2} alt="Avocado egg toast on a plate" />

        {/* ── Bottom row ── */}
        <GalleryItem src={img3} alt="Fried egg on toast close-up" />
        <GalleryItem src={img4} alt="Liquor bottles at the bar" />
        <GalleryItem src={img5} alt="Plated meat dish" />
      </motion.div>
    </section>
  );
}
