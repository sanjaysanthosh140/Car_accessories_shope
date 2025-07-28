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
          <Route path='/cart' element={<ProductCard/>}/>
        </Routes>
        
        <Locations />
        {/* <Contact /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
