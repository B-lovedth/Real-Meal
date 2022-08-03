import Veggie from "../components/Veggie";
import HeroSection from "../components/HeroSection.jsx";
import Popular from "../components/Popular";
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <motion.div>
        <HeroSection/>
        <Popular/>
        <Veggie/>
    </motion.div>
  )
}

export default Home
