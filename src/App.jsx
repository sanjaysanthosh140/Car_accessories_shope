import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Hero from "./Componets/Hero";
import CategorySection from "./Componets/CategorySection";
import Locations from "./Componets/Location";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import CarSeatDisplay from "./Componets/Displayset";
import CarMatDisplay from "./Componets/Car_mat";
import ProductCard from "./Componets/Carts";
import VideoSlider from "./Componets/videos";
import Gallery from "./Componets/Work_showcase";
import MasonryGallery from "./Componets/Premium_accessories";
import Car_4D_mats from "./Componets/Car_4D_mats";
import Mats5D from "./Componets/5D_mats";
import Mats7D from "./Componets/7D_mats";
import VinylFlooring from "./Componets/Vinyl_flooring";
import Wind_booster from "./Componets/wind_speed";
import Ventilator_seat from "./Componets/V_seat";
// import Gallery from "./Componets/gallary_img";
//import ClientShowcase from "./Componets/gallary_img"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<CategorySection />} />
          <Route path="/seats" element={<CarSeatDisplay />} />
          <Route path="/mat" element={<CarMatDisplay />} />
          <Route path="/android" element={<ProductCard />} />
          <Route path="/cart" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<VideoSlider />} />
          <Route path="/videos" element={<VideoSlider />} />
          <Route path="/premium" element={<MasonryGallery />} />
          <Route path="/4D_mats" element={<Car_4D_mats />} />
          <Route path="/5d-mats" element={<Mats5D />} />
          <Route path="/7d-mats" element={<Mats7D />} />
          <Route path="/vinyl-flooring" element={<VinylFlooring />} />
          <Route path="/wind_booster" element={<Wind_booster />} />
          <Route path="/Ventilator_seat" element={<Ventilator_seat />} />
        </Routes>
        <Locations />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
