import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
// import Gallery from "./Componets/gallary_img";
//import ClientShowcase from "./Componets/gallary_img"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<CategorySection />} />
          <Route path="/seats" element={<CarSeatDisplay/>} />
          <Route path="/mat" element={<CarMatDisplay/>} />
          <Route path='/android' element={<ProductCard/>}/>
          <Route path='/cart' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<VideoSlider/>}/>
          <Route path='/videos' element={<VideoSlider/>}/>
          <Route path='/premium' element={<MasonryGallery/>}/>  
        </Routes>
        
        <Locations />
        {/* <Contact /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
