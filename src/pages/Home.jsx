import Category from "./components/Category";
import Veggie from "../components/Veggie";
import HeroSection from "../components/HeroSection.jsx";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <Popular />
      <Veggie />
      <Category />
    </motion.div>
  );
};

export default Home;
